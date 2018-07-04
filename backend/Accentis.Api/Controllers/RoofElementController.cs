using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Accentis.Business.Contracts.Services.RoofElements;
using Accentis.Business.Helpers;
using Accentis.Business.Model;
using Accentis.Business.Services.RoofElements;
using Accentis.Database.Domain.Domain;
using AutoMapper;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Accentis.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/RoofElement")]
    public class RoofElementController : Controller
    {
        #region Properties
        private readonly IRoofElementService _roofElementService;
        #endregion

        #region Constructor
        public RoofElementController()
        {
            _roofElementService = new RoofElementService();
        }
        #endregion

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPost]
        public object Post([FromBody]RoofElementModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var roofElement = Mapper.Map<RoofElement>(model);
                    _roofElementService.CreateRoofElement(roofElement);
                    output.Success = true;
                    output.Message = "Roof element created successfully!";
                    return output;
                }
                output.Success = false;
                output.Message = "Something went wrong!";
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
        [HttpPut]
        public object Put([FromBody]RoofElementModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var roofElement = Mapper.Map<RoofElement>(model);
                    _roofElementService.UpdateRoofElement(roofElement);
                    output.Success = true;
                    output.Message = "Roof element updated successfully!";
                    return output;
                }
                output.Success = false;
                output.Message = "Something went wrong!";
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
        [HttpDelete("{id}")]
        public object Delete(int id)
        {
            var output = new ResponseDetail();
            try
            {
                if (id > 0)
                {
                    var roofElement = _roofElementService.GetRoofElement(id);
                    if (roofElement != null)
                    {
                        roofElement.Delete = true;
                        _roofElementService.UpdateRoofElement(roofElement);
                        output.Success = true;
                        output.Message = "Roof element deleted successfully!";
                        return output;
                    }
                    output.Success = false;
                    output.Message = "Unable to find roof element!";
                    return output;
                }
                output.Success = false;
                output.Message = "Please enter proper id!";
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
        [HttpGet("{id}")]
        public object Get(int id)
        {
            var output = new ResponseDetail();

            try
            {
                if (id > 0)
                {
                    var roofElement = _roofElementService.GetRoofElement(id);
                    if (roofElement != null)
                    {
                        output.Data = roofElement;
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find roof element!";
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
        [HttpGet("{request}")]
        public object Get(DataSourceRequest request)
        {
            var response = new ApiErrorDetail();
            try
            {
                var roofElementList = _roofElementService.GetAllRoofElements().ToList();
                var kendoList = roofElementList.ToDataSourceResult(request);
                return kendoList;
            }
            catch (Exception ex)
            {
                return ErrorHelper.KendoCatchBloackResponse(response, ex);
            }
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet]
        public object Get()
        {
            var output = new ResponseDetail();

            try
            {
                var roofElementList = _roofElementService.GetAllRoofElements().ToList();
                output.Data = roofElementList;
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
        [HttpGet]
        [Route("GetAll")]
        public object GetAll()
        {
            var output = new ResponseDetail();

            try
            {
                var roofElementList = _roofElementService.Get().ToList();
                output.Data = roofElementList;
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
    }
}