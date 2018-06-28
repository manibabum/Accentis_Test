using Accentis.Business.Contracts.Services.BuildingAdviceMaintenances;
using Accentis.Business.Helpers;
using Accentis.Business.Model;
using Accentis.Business.Services.BuildingAdviceMaintenances;
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
    [Route("api/BuildingAdviceMaintenance")]
    public class BuildingAdviceMaintenanceController : Controller
    {
        #region Properties
        private readonly IBuildingAdviceMaintenanceService _buildingAdviceMaintenanceService;
        #endregion

        #region Constructor
        public BuildingAdviceMaintenanceController()
        {
            _buildingAdviceMaintenanceService = new BuildingAdviceMaintenanceService();
        }
        #endregion

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPost]
        public object Post([FromBody]BuildingAdviceMaintenanceModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var buildingAdviceMaintenance = Mapper.Map<BuildingAdviceMaintenance>(model);
                    _buildingAdviceMaintenanceService.CreateBuildingAdviceMaintenance(buildingAdviceMaintenance);
                    output.Message = "Building advance maintenance created successfully!";
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
        public object Put([FromBody]BuildingAdviceMaintenanceModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var buildingAdviceMaintenance = Mapper.Map<BuildingAdviceMaintenance>(model);
                    _buildingAdviceMaintenanceService.UpdateBuildingAdviceMaintenance(buildingAdviceMaintenance);
                    output.Message = "Building advance maintenance updated successfully!";
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
                    var buildingAdviceMaintenance = _buildingAdviceMaintenanceService.GetBuildingAdviceMaintenance(id);
                    if (buildingAdviceMaintenance != null)
                    {
                        buildingAdviceMaintenance.Delete = true;
                        _buildingAdviceMaintenanceService.UpdateBuildingAdviceMaintenance(buildingAdviceMaintenance);
                        output.Message = "Building advance maintenance deleted successfully!";
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find building advance maintenance!";
                    output.Success = false;
                    return output;
                }
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
                    var buildingAdviceMaintenance = _buildingAdviceMaintenanceService.GetBuildingAdviceMaintenance(id);
                    if (buildingAdviceMaintenance != null)
                    {
                        output.Data = buildingAdviceMaintenance;
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find building advance maintenance!";
                    output.Success = false;
                    return output;
                }
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
                var buildingAdviceMaintenance = _buildingAdviceMaintenanceService.GetAllBuildingAdviceMaintenance();
                output.Data = buildingAdviceMaintenance;
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
                var buildingAdviceMaintenance = _buildingAdviceMaintenanceService.Get();
                output.Data = buildingAdviceMaintenance;
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
                var buildingAdviceMaintenance = _buildingAdviceMaintenanceService.GetAllBuildingAdviceMaintenance();
                var kendoList = buildingAdviceMaintenance.ToDataSourceResult(request);
                return kendoList;
            }
            catch (Exception ex)
            {
                return ErrorHelper.KendoCatchBloackResponse(response, ex);
            }
        }

    }
}