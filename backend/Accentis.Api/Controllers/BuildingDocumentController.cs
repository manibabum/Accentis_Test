using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Accentis.Business.Contracts.Services.BuildingDocuments;
using Accentis.Business.Helpers;
using Accentis.Business.Model;
using Accentis.Business.Services.BuildingDocuments;
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
    [Route("api/BuildingDocument")]
    public class BuildingDocumentController : Controller
    {
        #region Properties
        private readonly IBuildingDocumentsService _buildingDocumentsService;
        #endregion

        #region Constructor
        public BuildingDocumentController()
        {
            _buildingDocumentsService = new BuildingDocumentsService();
        }
        #endregion

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPost]
        public object Post([FromBody] BuildingDocumentModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var buildingDocument = Mapper.Map<BuildingDocument>(model);
                    _buildingDocumentsService.CreateBuildingDocuments(buildingDocument);
                    output.Message = "Building Document created successfully!";
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
        public object Put([FromBody] BuildingDocumentModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var buildingDocument = Mapper.Map<BuildingDocument>(model);
                    _buildingDocumentsService.UpdateBuildingDocuments(buildingDocument);
                    output.Message = "Building Document updated successfully!";
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
                    var buildingDocumentDetail = _buildingDocumentsService.GetBuildingDocument(id);
                    if (buildingDocumentDetail != null)
                    {
                        buildingDocumentDetail.Delete = true;
                        _buildingDocumentsService.UpdateBuildingDocuments(buildingDocumentDetail);
                        output.Message = "Building Document deleted successfully!";
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find Building Document!";
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
                    var buildingDocumentDetail = _buildingDocumentsService.GetBuildingDocument(id);
                    if (buildingDocumentDetail != null)
                    {
                        output.Data = buildingDocumentDetail;
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find Building Document!";
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
        [HttpGet]
        public object Get()
        {
            var output = new ResponseDetail();

            try
            {
                var buildingDocumentDetail = _buildingDocumentsService.GetAllBuildingDocuments();
                if (buildingDocumentDetail != null)
                {
                    output.Data = buildingDocumentDetail;
                    output.Success = true;
                    return output;
                }
                output.Message = "Something went wrong!";
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
                var buildingDocumentDetail = _buildingDocumentsService.GetAllBuildingDocuments();
                if (buildingDocumentDetail != null)
                {
                    var kendoList = buildingDocumentDetail.ToDataSourceResult(request);
                    return kendoList;
                }
                response.ErrorMessage = "Something went wrong!";
                return response;

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
                var buildingDocumentDetail = _buildingDocumentsService.Get();
                if (buildingDocumentDetail != null)
                {
                    output.Data = buildingDocumentDetail;
                    output.Success = true;
                    return output;
                }
                output.Message = "Something went wrong!";
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