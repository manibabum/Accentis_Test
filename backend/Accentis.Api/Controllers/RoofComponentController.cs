using System;
using System.Linq;
using Accentis.Business.Contracts.Services.RoofComponent;
using Accentis.Business.Helpers;
using Accentis.Business.Model;
using Accentis.Business.Services.RoofComponent;
using Accentis.Database.Domain.Domain;
using AutoMapper;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Accentis.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/RoofComponent")]
    public class RoofComponentController : Controller
    {
        #region Properties
        private readonly IRoofComponentsService _roofComponentsService;
        #endregion

        #region Constructor
        public RoofComponentController()
        {
            _roofComponentsService = new RoofComponentService();
        }
        #endregion


        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet]
        public object Get(DataSourceRequest request)
        {
            var response = new ApiErrorDetail();
            try
            {
                var roofComponentList = _roofComponentsService.GetAllRoofComponents().ToList();
                var kendoList = roofComponentList.ToDataSourceResult(request);
                return kendoList;
            }
            catch (Exception ex)
            {
                return ErrorHelper.KendoCatchBloackResponse(response, ex);
            }
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [Route("GetAllRoofComponents")]
        [HttpGet]
        public object Get()
        {
            var output = new ResponseDetail();

            try
            {
                var roofComponentList = _roofComponentsService.GetAllRoofComponents();
                output.Data = roofComponentList;
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
                var roofComponentList = _roofComponentsService.Get();
                output.Data = roofComponentList;
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
        public object Post([FromBody] RoofComponentsModel model)
        {
            var output = new ResponseDetail();
            try
            {
                if (ModelState.IsValid)
                {
                    var roofComponent = Mapper.Map<RoofComponents>(model);
                    _roofComponentsService.CreateRoofComponents(roofComponent);
                    output.Success = true;
                    output.Message = "Roof component created successfully!";
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
        public object Put([FromBody] RoofComponentsModel model)
        {
            var output = new ResponseDetail();
            try
            {
                if (ModelState.IsValid)
                {
                    var roofComponent = Mapper.Map<RoofComponents>(model);
                    _roofComponentsService.UpdateRoofComponents(roofComponent);
                    output.Message = "Roof component updated successfully!";
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
                    var roofComponentDetail = _roofComponentsService.GetRoofComponentsById(id);
                    if (roofComponentDetail != null)
                    {
                        output.Data = roofComponentDetail;
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find roof component!";
                    output.Success = false;
                    return output;
                }
                //output.Message = "Enter proper id";
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
                    var roofComponentDetail = _roofComponentsService.GetRoofComponentsById(id);
                    if (roofComponentDetail != null)
                    {
                        roofComponentDetail.Delete = true;
                        _roofComponentsService.UpdateRoofComponents(roofComponentDetail);
                        output.Message = "Roof component deleted successfully!";
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find roof component";
                    output.Success = false;
                    return output;
                }
                //output.Message = "Enter proper id";
                output.Success = false;
                return output;
            }
            catch (Exception ex)
            {
                output.Success = false;
                output.Message = ex.Message;
                return output;
                throw;
            }
        }
    }
}