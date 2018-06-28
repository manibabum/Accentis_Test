using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Accentis.Business.Contracts.Services.ObservedDefect;
using Accentis.Business.Helpers;
using Accentis.Business.Model;
using Accentis.Business.Services.ObservedDefect;
using Accentis.Database.Domain.Domain;
using AutoMapper;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Accentis.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/ObservedDefect")]
    public class ObservedDefectController : Controller
    {
        #region Properties
        private readonly IObservedDefectService _observedDefectService;
        #endregion
        #region Constructor
        public ObservedDefectController()
        {
            _observedDefectService = new ObservedDefactService();
        }
        #endregion


        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPost]
        public object Post([FromBody]ObservedDefectsModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var observedDefect = Mapper.Map<ObservedDefects>(model);
                    _observedDefectService.CreateObservedDefact(observedDefect);
                    output.Message = "Observed defect created successfully!";
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
        public object Put([FromBody]ObservedDefectsModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var observedDefect = Mapper.Map<ObservedDefects>(model);
                    _observedDefectService.UpdateObservedDefact(observedDefect);
                    output.Message = "Observed defect updated successfully!";
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
                    var observedDefectDetail = _observedDefectService.GetObservedDefects(id);
                    if (observedDefectDetail != null)
                    {
                        observedDefectDetail.Delete = true;
                        _observedDefectService.UpdateObservedDefact(observedDefectDetail);
                        output.Message = "Observed Defect deleted successfully!";
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find Observed Defect!";
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
                    var observedDefectDetail = _observedDefectService.GetObservedDefects(id);
                    if (observedDefectDetail != null)
                    {
                        output.Data = observedDefectDetail;
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find Observed Defect!";
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
                var observedDefectDetail = _observedDefectService.GetAllObservedDefects();
                if (observedDefectDetail != null)
                {
                    output.Data = observedDefectDetail;
                    output.Success = true;
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
        [Route("GetAll")]
        public object GetAll()
        {
            var output = new ResponseDetail();
            try
            {
                var observedDefectDetail = _observedDefectService.Get();
                if (observedDefectDetail != null)
                {
                    output.Data = observedDefectDetail;
                    output.Success = true;
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
        [HttpGet("{request}")]
        public object Get(DataSourceRequest request)
        {
            var response = new ApiErrorDetail();

            try
            {
                var observedDefectDetail = _observedDefectService.GetAllObservedDefects();
                var kendoList = observedDefectDetail.ToDataSourceResult(request);
                return kendoList;

            }
            catch (Exception ex)
            {
                return ErrorHelper.KendoCatchBloackResponse(response, ex);
            }
        }
    }
}