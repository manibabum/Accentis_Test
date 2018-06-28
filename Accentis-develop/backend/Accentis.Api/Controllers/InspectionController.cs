using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Accentis.Business.Contracts.Services.Inspection;
using Accentis.Business.Helpers;
using Accentis.Business.Model;
using Accentis.Business.Services.Inspection;
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
    [Route("api/Inspection")]
    public class InspectionController : Controller
    {
        #region Properties
        private readonly IInspectionService _inspectionService;
        #endregion

        #region Constructor
        public InspectionController()
        {
            _inspectionService = new InspectionService();
        }
        #endregion

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPost]
        public object Post([FromBody] InspectionModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var inspection = Mapper.Map<Inspections>(model);
                    _inspectionService.CreateInspection(inspection);
                    output.Success = true;
                    output.Message = "Inspection Created Successfully!";
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
        public object Put([FromBody] InspectionModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var inspection = Mapper.Map<Inspections>(model);
                    _inspectionService.UpdateInspection(inspection);
                    output.Success = true;
                    output.Message = "Inspection Updated Successfully";
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
                    var inspectionDetail = _inspectionService.GetInspection(id);
                    if (inspectionDetail != null)
                    {
                        inspectionDetail.Delete = true;
                        _inspectionService.UpdateInspection(inspectionDetail);
                        output.Success = true;
                        output.Message = "Inspection has deleted";
                        return output;
                    }
                    output.Success = false;
                    output.Message = "Unable to find inspection";
                    return output;
                }
                output.Success = false;
                output.Message = "Enter Proper Id";
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
                    var inspectionDetail = _inspectionService.GetInspection(id);
                    if (inspectionDetail != null)
                    {
                        output.Success = true;
                        output.Data = inspectionDetail;
                        return output;
                    }
                    output.Success = false;
                    output.Message = "Inspection data not found!";
                    return output;
                }
                output.Success = false;
                output.Message = "Please enter proper id";
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
        [HttpGet("{request}")]
        public object Get(DataSourceRequest request)
        {
            var response = new ApiErrorDetail();
            try
            {
                var inspectionList = _inspectionService.GetAllInspections();
                var kendoList = inspectionList.ToDataSourceResult(request);
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
                var inspectionList = _inspectionService.GetAllInspections();
                output.Data = inspectionList;
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
                var inspectionList = _inspectionService.Get();
                output.Data = inspectionList;
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