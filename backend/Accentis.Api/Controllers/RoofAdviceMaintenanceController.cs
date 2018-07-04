using Accentis.Business.Contracts.Services.RoofAdvicesMaintenance;
using Accentis.Business.Helpers;
using Accentis.Business.Model;
using Accentis.Business.Services.RoofAdvicesMaintenance;
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
    [Route("api/RoofAdviceMaintenance")]
    public class RoofAdviceMaintenanceController : Controller
    {
        #region Properties
        private readonly IRoofAdvicesMaintenanceService _roofAdvicesMaintenanceService;
        #endregion

        #region Constructor
        public RoofAdviceMaintenanceController()
        {
            _roofAdvicesMaintenanceService = new RoofAdvicesMaintenanceService();
        }
        #endregion

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPost]
        public object Post([FromBody]RoofAdviceMaintenanceModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var roofAdvicesMaintenance = Mapper.Map<RoofAdviceMaintenance>(model);
                    _roofAdvicesMaintenanceService.CreateRoofAdvicesMaintenance(roofAdvicesMaintenance);
                    output.Message = "Roof Advices Maintenance created successfully!";
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
        public object Put([FromBody]RoofAdviceMaintenanceModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var roofAdviceMaintenance = Mapper.Map<RoofAdviceMaintenance>(model);
                    _roofAdvicesMaintenanceService.UpdateRoofAdvicesMaintenance(roofAdviceMaintenance);
                    output.Message = "Roof Advices Maintenance updated successfully!";
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
                    var roofAdviceMaintenance = _roofAdvicesMaintenanceService.GetRoofAdviceMaintenance(id);
                    if (roofAdviceMaintenance != null)
                    {
                        roofAdviceMaintenance.Delete = true;
                        _roofAdvicesMaintenanceService.UpdateRoofAdvicesMaintenance(roofAdviceMaintenance);
                        output.Message = "Roof Advices Maintenance deleted successfully!";
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find Roof Advices Maintenance!";
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
        [HttpGet("{id}")]
        public object Get(int id)
        {
            var output = new ResponseDetail();
            try
            {
                if (id > 0)
                {
                    var roofAdviceMaintenance = _roofAdvicesMaintenanceService.GetRoofAdviceMaintenance(id);
                    if (roofAdviceMaintenance != null)
                    {
                        output.Data = roofAdviceMaintenance;
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find Roof Advices Maintenance!";
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
        [HttpGet]
        public object Get()
        {
            var output = new ResponseDetail();

            try
            {
                var roofAdviceMaintenanceList = _roofAdvicesMaintenanceService.GetAllRoofAdviceMaintenance();
                output.Data = roofAdviceMaintenanceList;
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
                var roofAdviceMaintenanceList = _roofAdvicesMaintenanceService.Get();
                output.Data = roofAdviceMaintenanceList;
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
                var roofAdviceMaintenanceList = _roofAdvicesMaintenanceService.GetAllRoofAdviceMaintenance();
                var kendoList = roofAdviceMaintenanceList.ToDataSourceResult(request);
                return kendoList;
            }
            catch (Exception ex)
            {
                return ErrorHelper.KendoCatchBloackResponse(response, ex);
            }
        }
    }
}