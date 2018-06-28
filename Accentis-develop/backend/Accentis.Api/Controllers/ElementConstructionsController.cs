using Accentis.Business.Contracts.Services.ElementConstruction;
using Accentis.Business.Helpers;
using Accentis.Business.Model;
using Accentis.Business.Services.ElementConstruction;
using Accentis.Database.Domain.Domain;
using AutoMapper;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Accentis.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/ElementConstructions")]
    public class ElementConstructionsController : Controller
    {
        #region Properties
        private readonly IElementConstructionService _elementConstructionService;
        #endregion

        #region Constructor
        public ElementConstructionsController()
        {
            _elementConstructionService = new ElementConstructionService();
        }
        #endregion

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPost]
        public object Post([FromBody]ElementConstructionModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var elementConstruction = Mapper.Map<ElementConstructions>(model);
                    _elementConstructionService.CreateElementConstruction(elementConstruction);
                    output.Message = "Element Constructions created successfully!";
                    output.Success = true;
                    return output;
                }
                output.Message = "Something went wrong!";
                output.Success = false;
                return output;
            }
            catch (Exception ex)
            {
                output.Message = ex.Message;
                output.Success = false;
                return output;
            }
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPut]
        public object Put([FromBody]ElementConstructionModel model)
        {
            var output = new ResponseDetail();
            try
            {
                if (ModelState.IsValid)
                {
                    var elementConstruction = Mapper.Map<ElementConstructions>(model);
                    _elementConstructionService.UpdateElementConstruction(elementConstruction);
                    output.Message = "Element Constructions updated successfully!";
                    output.Success = true;
                    return output;
                }
                output.Message = "Something went wrong!";
                output.Success = false;
                return output;
            }
            catch (Exception ex)
            {
                output.Message = ex.Message;
                output.Success = false;
                return output;
            }
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpDelete("{id}")]
        public object Delete(int id)
        {
            var output = new ResponseDetail();
            try
            {
                if (id > 0)
                {
                    var elementConstruction = _elementConstructionService.GetElementConstruction(id);
                    if (elementConstruction != null)
                    {
                        elementConstruction.Delete = true;
                        _elementConstructionService.UpdateElementConstruction(elementConstruction);
                        output.Message = "Element Constructions deleted successfully!";
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find element construction!";
                    output.Success = false;
                    return output;
                }
                output.Message = "Enter proper id!";
                output.Success = false;
                return output;
            }
            catch (Exception ex)
            {
                output.Message = ex.Message;
                output.Success = false;
                return output;
            }
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet("{id}")]
        public object Get(int id)
        {
            var output = new ResponseDetail();

            try
            {
                if (id > 0)
                {
                    var elementConstruction = _elementConstructionService.GetElementConstruction(id);
                    if (elementConstruction != null)
                    {
                        output.Data = elementConstruction;
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find element construction!";
                    output.Success = false;
                    return output;
                }
                //output.Message = "Enter proper id!";
                output.Success = false;
                return output;
            }
            catch (Exception ex)
            {
                output.Message = ex.Message;
                output.Success = false;
                return output;
            }
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet]
        public object Get()
        {
            var output = new ResponseDetail();
            try
            {
                var elementConstructionList = _elementConstructionService.GetAllElementConstructions();
                output.Data = elementConstructionList;
                output.Success = true;
                return output;
            }
            catch (Exception ex)
            {
                output.Message = ex.Message;
                output.Success = false;
                return output;
            }

        }


        [Authorize(AuthenticationSchemes = "Bearer")]
        [Route("GetAll")]
        [HttpGet]
        public object GetAll()
        {
            var output = new ResponseDetail();
            try
            {
                var elementConstructionList = _elementConstructionService.Get();
                output.Data = elementConstructionList;
                output.Success = true;
                return output;
            }
            catch (Exception ex)
            {
                output.Message = ex.Message;
                output.Success = false;
                return output;
            }

        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet("{request}")]
        public object Get(DataSourceRequest request)
        {
            var response = new ApiErrorDetail();

            try
            {
                var elementConstructionList = _elementConstructionService.GetAllElementConstructions();
                var kendoList = elementConstructionList.ToDataSourceResult(request);
                return kendoList;
            }
            catch (Exception ex)
            {
                return ErrorHelper.KendoCatchBloackResponse(response, ex);
            }
        }
    }
}