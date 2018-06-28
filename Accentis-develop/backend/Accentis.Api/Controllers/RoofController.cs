using System;
using Accentis.Business.Contracts.Services.Roofs;
using Accentis.Business.Helpers;
using Accentis.Business.Model;
using Accentis.Business.Services.Roofs;
using Accentis.Database.Domain.Domain;
using AutoMapper;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Accentis.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Roof")]
    public class RoofController : Controller
    {
        #region Properties
        private readonly IRoofService _roofService;
        #endregion

        #region Constructor
        public RoofController()
        {
            _roofService = new RoofService();
        }
        #endregion

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPost]
        public object Post([FromBody] RoofModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var roof = Mapper.Map<Roof>(model);
                    _roofService.CreateRoof(roof);
                    output.Success = true;
                    output.Message = "Roof Created Successfully!";
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
        public object Put([FromBody]RoofModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var roof = Mapper.Map<Roof>(model);
                    _roofService.UpdateRoof(roof);
                    output.Success = true;
                    output.Message = "Roof Updated Successfully";
                    return output;
                }
                output.Success = false;
                output.Message = "Something went wrong";
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
                    var roofDetail = _roofService.GetRoof(id);
                    if (roofDetail != null)
                    {
                        roofDetail.Delete = true;
                        _roofService.UpdateRoof(roofDetail);
                        output.Success = true;
                        output.Message = "Roof has deleted!";
                        return output;
                    }
                    output.Success = false;
                    output.Message = "Unable to find roof";
                    return output;
                }
                output.Success = false;
                output.Message = "Enter Proper id";
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
                    var roof = _roofService.GetRoof(id);
                    if (roof != null)
                    {
                        output.Data = roof;
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find roof!";
                    output.Success = false;
                    return output;
                }
                output.Message = "Enter proper id";
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
                var roofList = _roofService.GetAllRoofs();
                var kendoList = roofList.ToDataSourceResult(request);
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
                var roofList = _roofService.GetAllRoofs();
                output.Data = roofList;
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
                var roofList = _roofService.Get();
                output.Data = roofList;
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
    }
}