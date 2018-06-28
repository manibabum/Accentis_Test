using Accentis.Business.Contracts.Services.BuildingPicture;
using Accentis.Business.Helpers;
using Accentis.Business.Model;
using Accentis.Business.Services.BuildingPicture;
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
    [Route("api/BuildingPictures")]
    public class BuildingPicturesController : Controller
    {
        #region Properties
        private readonly IBuildingPictureService _buildingPictureService;
        #endregion

        #region Constructor
        public BuildingPicturesController()
        {
            _buildingPictureService = new BuildingPictureService();
        }
        #endregion

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPost]
        public object Post([FromBody]BuildingPicturesModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var buildingPictures = Mapper.Map<BuildingPictures>(model);
                    _buildingPictureService.CreateBuildingPictures(buildingPictures);
                    output.Message = "Building Pictures created successfully!";
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
        public object Put([FromBody]BuildingPicturesModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var buildingPictures = Mapper.Map<BuildingPictures>(model);
                    _buildingPictureService.UpdateBuildingPictures(buildingPictures);
                    output.Message = "Building Pictures updated successfully!";
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
                    var buildingPictures = _buildingPictureService.GetBuildingPicture(id);
                    if (buildingPictures != null)
                    {
                        buildingPictures.Delete = true;
                        _buildingPictureService.UpdateBuildingPictures(buildingPictures);
                        output.Message = "Building Pictures deleted successfully!";
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find building pictures!";
                    output.Success = false;
                    return output;
                }
                //output.Message = "Enter Proper id!";
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
                    var buildingPictures = _buildingPictureService.GetBuildingPicture(id);
                    if (buildingPictures != null)
                    {
                        output.Data = buildingPictures;
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find building pictures!";
                    output.Success = false;
                    return output;
                }
                //output.Message = "Enter Proper id!";
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

                var buildingPicturesList = _buildingPictureService.GetAllBuildingPictures();
                output.Data = buildingPicturesList;
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
                var buildingPicturesList = _buildingPictureService.GetAllBuildingPictures();
                var kendoList = buildingPicturesList.ToDataSourceResult(request);
                return kendoList;
            }
            catch (Exception ex)
            {
                return ErrorHelper.KendoCatchBloackResponse(response, ex);
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
                var buildingPicturesList = _buildingPictureService.Get();
                output.Data = buildingPicturesList;
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