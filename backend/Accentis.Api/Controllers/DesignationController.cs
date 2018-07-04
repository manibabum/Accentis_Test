using System;
using System.Linq;
using Accentis.Business.Contracts.Services.Designations;
using Accentis.Business.Helpers;
using Accentis.Business.Model;
using Accentis.Business.Services.Designations;
using Accentis.Database.Domain.Domain;
using AutoMapper;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Accentis.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Designation")]
    public class DesignationController : Controller
    {
        #region Properties
        private readonly IDesignationService _designationService;
        #endregion

        #region Constructor
        public DesignationController()
        {
            _designationService = new DesignationService();
        }
        #endregion

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet]
        public object Get(DataSourceRequest request)
        {

            var response = new ApiErrorDetail();
            try
            {
                var designationList = _designationService.GetAllDesignation().ToList();
                var kendoList = designationList.ToDataSourceResult(request);
                return kendoList;

            }
            catch (Exception ex)
            {
                return ErrorHelper.KendoCatchBloackResponse(response, ex);
            }
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet]
        [Route("GetAllDesignation")]
        public object Get()
        {
            var output = new ResponseDetail();

            try
            {
                var designationList = _designationService.GetAllDesignation();
                output.Data = designationList;
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
                var designationList = _designationService.Get();
                output.Data = designationList;
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
        public object Post([FromBody]DesignationModel model)
        {
            var output = new ResponseDetail();
            try
            {
                if (ModelState.IsValid)
                {
                    var designationDetail = Mapper.Map<Designation>(model);

                    var count = _designationService.CheckExistingDesignation(model.DesignationName);
                    if (!count)
                    {
                        _designationService.CreateDesignation(designationDetail);
                        output.Success = true;
                        output.Message = "Designtion added successfully!";
                    }
                    else
                    {
                        output.Success = false;
                        output.Message = "Designation already exists!";
                    }
                    return output;
                }
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
        public object Put([FromBody]DesignationModel model)
        {
            var output = new ResponseDetail();
            try
            {
                if (ModelState.IsValid)
                {
                    if (model.DesignationID > 0)
                    {
                        var designationDetail = Mapper.Map<Designation>(model);
                        var count = _designationService.CheckExistingDesignation(model.DesignationName);
                        if (!count)
                        {
                            _designationService.UpdateDesignation(designationDetail);
                            output.Success = true;
                            output.Message = "Designtion updated successfully!";
                        }
                        else
                        {
                            output.Success = false;
                            output.Message = "Designtion already exists!";
                        }
                        return output;
                    }
                    output.Success = false;
                    return output;
                }
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
                    var designationDetail = _designationService.GetDesignationById(id);
                    output.Data = designationDetail;
                    output.Success = true;
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
                    var designation = _designationService.GetDesignationById(id);
                    if (designation != null)
                    {
                        designation.Delete = true;
                        _designationService.UpdateDesignation(designation);
                        output.Success = true;
                        output.Message = "Designation deleted successfully!";
                        return output;
                    }
                    output.Success = false;
                    output.Message = "Unable to find designation";
                    return output;
                }
                output.Success = false;
               // output.Message = "Enter Proper id";
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