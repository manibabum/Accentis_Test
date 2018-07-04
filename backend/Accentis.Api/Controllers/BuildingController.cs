using System;
using System.Collections.Generic;
using System.Linq;
using Accentis.Business.Contracts.Services.Buildings;
using Accentis.Business.Helpers;
using Accentis.Business.Model;
using Accentis.Business.Services.Buildings;
using AutoMapper;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Accentis.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Building")]
    public class BuildingController : Controller
    {
        #region properties
        private readonly IBuildingService _buildingService;
        #endregion

        #region Constructor
        public BuildingController()
        {
            _buildingService = new BuildingService();
        }
        #endregion

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet("{request}")]
        public object Get(DataSourceRequest request)
        {
            var response = new ApiErrorDetail();
            try
            {
                var buildingList = _buildingService.GetBuildings().ToList();
                var buildingData = Mapper.Map<List<BuildingModel>>(buildingList);
                var kendoList = buildingData.ToDataSourceResult(request);
                
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
                var buildingList = _buildingService.GetBuildings();
                output.Data = buildingList;
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
        [Route("GetAll")]
        [HttpGet]
        public object GetAll()
        {
            var output = new ResponseDetail();

            try
            {
                var buildingList = _buildingService.Get();
                output.Data = buildingList;
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
        //[Authorize(AuthenticationSchemes = "Bearer")]
        //[HttpPost]
        //public object Post([FromBody]BuildingModel model)
        //{
        //    var output = new ResponseDetail();
        //    try
        //    {
        //        if (ModelState.IsValid && model != null)
        //        {
        //            var bulding = Mapper.Map<Building>(model);
        //            _buildingService.CreateBuilding(bulding);
        //            output.Success = true;
        //            output.Message = "Building added successfully!";
        //            return output;
        //        }
        //        output.Success = false;
        //        return output;
        //    }
        //    catch (Exception ex)
        //    {
        //        output.Success = false;
        //        output.Message = ex.Message;
        //        return output;
        //    }
        //}

        //[Authorize(AuthenticationSchemes = "Bearer")]
        //[HttpPut]
        //public object Put([FromBody]BuildingTypeModel model)
        //{
        //    var output = new ResponseDetail();
        //    try
        //    {
        //        if (ModelState.IsValid && model != null)
        //        {
        //            var building = Mapper.Map<Building>(model);
        //            _buildingService.UpdateBuilding(building);
        //            output.Success = true;
        //            output.Message = "Building updated successfully!";
        //            return output;
        //        }
        //        output.Success = false;
        //        return output;
        //    }
        //    catch (Exception ex)
        //    {
        //        output.Success = false;
        //        output.Message = ex.Message;
        //        return output;
        //    }
        //}

        //[Authorize(AuthenticationSchemes = "Bearer")]
        //[HttpGet("{id}")]
        //public object Get(int id)
        //{
        //    var output = new ResponseDetail();
        //    try
        //    {
        //        if (id > 0)
        //        {
        //            var buildingDetail = _buildingService.GetBuilding(id);
        //            output.Data = buildingDetail;
        //            output.Success = true;
        //            return output;
        //        }
        //        output.Success = false;
        //        return output;
        //    }
        //    catch (Exception ex)
        //    {
        //        output.Success = false;
        //        output.Message = ex.Message;
        //        return output;
        //    }
        //}

        //[Authorize(AuthenticationSchemes = "Bearer")]
        //[HttpDelete("{id}")]
        //public object Delete(int id)
        //{
        //    var output = new ResponseDetail();
        //    try
        //    {
        //        if (id > 0)
        //        {
        //            var building = _buildingService.GetBuilding(id);
        //            if (building != null)
        //            {
        //                building.Delete = true;
        //                _buildingService.UpdateBuilding(building);
        //                output.Success = true;
        //                output.Message = "Building deleted successfully!";
        //                return output;
        //            }
        //            output.Success = true;
        //            return output;
        //        }
        //        output.Success = false;
        //        return output;
        //    }
        //    catch (Exception ex)
        //    {
        //        output.Success = false;
        //        output.Message = ex.Message;
        //        return output;
        //    }
        //}
    }
}