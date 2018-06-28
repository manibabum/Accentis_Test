using System;
using System.Linq;
using Accentis.Business.Contracts.Services.BuildingTypes;
using Accentis.Business.Helpers;
using Accentis.Business.Model;
using Accentis.Business.Services.BuildingTypes;
using Accentis.Database.Domain.Domain;
using AutoMapper;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace Accentis.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/BuildingTypeApi")]
    public class BuildingTypeApiController : Controller
    {
        #region properties
        private readonly IBuildingTypeService _buildingTypeService;
        #endregion

        #region Constructor
        public BuildingTypeApiController()
        {
            _buildingTypeService = new BuildingTypeService();
        }
        #endregion

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet("{request}")]
        public object Get(DataSourceRequest request)
        {
            var response = new ApiErrorDetail();
            try
            {
                var buildingTypeList = _buildingTypeService.GetBuildingTypes().ToList();
                var kendoList = buildingTypeList.ToDataSourceResult(request);
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
                var buildingTypeList = _buildingTypeService.GetBuildingTypes();
                output.Data = buildingTypeList;
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
                var buildingTypeList = _buildingTypeService.Get();
                output.Data = buildingTypeList;
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
        public object Post([FromBody]BuildingTypeModel model)
        {
            var output = new ResponseDetail();
            try
            {
                if (ModelState.IsValid)
                {
                    var buldingType = Mapper.Map<BuildingType>(model);
                    _buildingTypeService.CreateBuildingType(buldingType);
                    output.Success = true;
                    output.Message = "Building type created successfully!";
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
        public object Put([FromBody]BuildingTypeModel model)
        {
            var output = new ResponseDetail();
            try
            {
                if (ModelState.IsValid)
                {
                    var buldingType = Mapper.Map<BuildingType>(model);
                    _buildingTypeService.UpdateBuildingType(buldingType);
                    output.Success = true;
                    output.Message = "Building type updated successfully!";
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
                    var buildingType = _buildingTypeService.GetBuildingType(id);
                    if (buildingType != null)
                    {
                        output.Data = buildingType;
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find building type!";
                }
                //output.Message = "Please enter proper id";
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
                    var buildingType = _buildingTypeService.GetBuildingType(id);
                    if (buildingType != null)
                    {
                        buildingType.Delete = true;
                        _buildingTypeService.UpdateBuildingType(buildingType);
                        output.Message = "Building type deleted successfully!";
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find building type!";
                    output.Success = true;
                    return output;
                }
                //output.Message = "Please enter proper id";
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
    }
}