
using System;
using System.Linq;
using Accentis.Business.Contracts.Services.ConstructionPart;
using Accentis.Business.Helpers;
using Accentis.Business.Model;
using Accentis.Business.Services.ConstructionPart;
using Accentis.Database.Domain.Domain;
using AutoMapper;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace Accentis.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/ConstructionParts")]
    public class ConstructionPartsController : Controller
    {
        #region Properties
        private readonly IConstructionPartsService _constructionPartsService;
        #endregion

        #region Constructor
        public ConstructionPartsController()
        {
            _constructionPartsService = new ConstructionPartsService();
        }
        #endregion


        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet]
        public object Get(DataSourceRequest request)
        {
            var response = new ApiErrorDetail();
            try
            {
                var constructionPartlist = _constructionPartsService.GetAllConstructionParts().ToList();
                var kendoList = constructionPartlist.ToDataSourceResult(request);
                return kendoList;

            }
            catch (Exception ex)
            {
                return ErrorHelper.KendoCatchBloackResponse(response, ex);
            }
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [Route("GetAllConstructionPart")]
        [HttpGet]
        public object Get()
        {
            var output = new ResponseDetail();

            try
            {
                var constructionPartsList = _constructionPartsService.GetAllConstructionParts();
                output.Data = constructionPartsList;
                output.Success = true;
                return output;
            }
            catch (Exception ex)
            {
                output.Success = false;
                output.Message = ex.Message;
                return output;
            }
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet]
        [Route("GetAll")]
        public object GetAll()
        {
            var output = new ResponseDetail();

            try
            {
                var constructionPartsList = _constructionPartsService.Get();
                output.Data = constructionPartsList;
                output.Success = true;
                return output;
            }
            catch (Exception ex)
            {
                output.Success = false;
                output.Message = ex.Message;
                return output;
            }
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPost]
        public object Post([FromBody]ConstructionPartsModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var constructionParts = Mapper.Map<ConstructionParts>(model);
                    _constructionPartsService.CreateConstructionParts(constructionParts);
                    output.Message = "Construction parts created successfully!!";
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
        public object Put([FromBody]ConstructionPartsModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var constructionParts = Mapper.Map<ConstructionParts>(model);
                    _constructionPartsService.UpdateConstructionParts(constructionParts);
                    output.Message = "Construction parts updated successfully!";
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
        [HttpGet("{id}")]
        public object Get(int id)
        {
            var output = new ResponseDetail();

            try
            {
                if (id > 0)
                {
                    var constructionParts = _constructionPartsService.GetConstructionParts(id);
                    if (constructionParts != null)
                    {
                        output.Data = constructionParts;
                        output.Success = true;
                        return output;
                    }
                    output.Message = "unable to find construction part!";
                    output.Success = false;
                    return output;
                }
                //output.Message = "Enter Proper id";
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
                    var constructionParts = _constructionPartsService.GetConstructionParts(id);
                    if (constructionParts != null)
                    {
                        constructionParts.Delete = true;
                        _constructionPartsService.UpdateConstructionParts(constructionParts);
                        output.Message = "Construction parts deleted successfully!";
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find construction part";
                    output.Success = false;
                    return output;
                }
                //output.Message = "Enter Proper id";
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
    }
}