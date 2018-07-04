using System;
using System.Linq;
using Accentis.Business.Contracts.Services.RoofTypes;
using Accentis.Business.Helpers;
using Accentis.Business.Model;
using Accentis.Business.Services.RoofTypes;
using Accentis.Database.Domain.Domain;
using AutoMapper;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Accentis.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/RoofType")]
    public class RoofTypeController : Controller
    {
        #region Properties
        private readonly IRoofTypeService _roofTypeService;
        #endregion

        #region Constructor
        public RoofTypeController()
        {
            _roofTypeService = new RoofTypeService();
        }
        #endregion

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet("{request}")]
        public object Get(DataSourceRequest request)
        {
            var response = new ApiErrorDetail();

            try
            {
                var roofTypeList = _roofTypeService.GetAllRoofTypes().ToList();
                var kendoList = roofTypeList.ToDataSourceResult(request);
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
                var roofTypeList = _roofTypeService.GetAllRoofTypes();
                output.Data = roofTypeList;
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
                var roofTypeList = _roofTypeService.Get();
                output.Data = roofTypeList;
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
        public object Post([FromBody]RoofTypeModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var roofType = Mapper.Map<RoofType>(model);
                    _roofTypeService.CreateRoofType(roofType);
                    output.Message = "Roof type created successfully!";
                    output.Success = true;
                    return output;
                }
                output.Message = "Something went wrong!";
                output.Success = false;
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
        public object Put([FromBody]RoofTypeModel model)
        {
            var output = new ResponseDetail();
            try
            {
                if (ModelState.IsValid)
                {
                    var roofType = Mapper.Map<RoofType>(model);
                    _roofTypeService.UpdateRoofType(roofType);
                    output.Message = "Roof type updated successfully!";
                    output.Success = true;
                    return output;
                }
                output.Message = "Something went wrong!";
                output.Success = false;
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
                    var roofTypeDetail = _roofTypeService.GetRoofType(id);
                    if (roofTypeDetail != null)
                    {
                        output.Data = roofTypeDetail;
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find rooftype!";
                    output.Success = false;
                    return output;
                }
                output.Message = "Enter proper id";
                output.Success = false;
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
                    var roofType = _roofTypeService.GetRoofType(id);

                    if (roofType != null)
                    {
                        roofType.Delete = true;
                        _roofTypeService.UpdateRoofType(roofType);
                        output.Message = "Roof type deleted successfully!";
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find roof type!";
                    output.Success = false;
                    return output;
                }
                output.Message = "Enter Proper id!";
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