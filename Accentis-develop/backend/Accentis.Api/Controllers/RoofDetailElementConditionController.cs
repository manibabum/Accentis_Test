using System;
using Accentis.Business.Contracts.Services.RoofDetailElementCondition;
using Accentis.Business.Helpers;
using Accentis.Business.Model;
using Accentis.Business.Services.RoofDetailElementCondition;
using Accentis.Database.Domain.Domain;
using AutoMapper;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Accentis.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/RoofDetailElementCondition")]
    public class RoofDetailElementConditionController : Controller
    {
        #region Properties
        private readonly IRoofDetailElementConditionService _roofDetailElementConditionService;
        #endregion

        #region Constructor
        public RoofDetailElementConditionController()
        {
            _roofDetailElementConditionService = new RoofDetailElementConditionService();
        }
        #endregion

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPost]
        public object Post([FromBody] RoofDetailElementConditionModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var roofDetailElementCondition = Mapper.Map<RoofDetailElementConditions>(model);
                    _roofDetailElementConditionService.CreateRoofDetailElementCondition(roofDetailElementCondition);
                    output.Success = true;
                    output.Message = "Roof Detail Element Condition created succesfully!";
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
        public object Put([FromBody] RoofDetailElementConditionModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var roofDetailElementCondition = Mapper.Map<RoofDetailElementConditions>(model);
                    _roofDetailElementConditionService.UpdateRoofDetailElementCondition(roofDetailElementCondition);
                    output.Message = "Roof Detail Element Condition updated successfully!";
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
        [HttpDelete("{id}")]
        public object Delete(int id)
        {
            var output = new ResponseDetail();

            try
            {
                if (id > 0)
                {
                    var roofDetailElementCondition = _roofDetailElementConditionService.GetRoofDetailElementCondition(id);
                    if (roofDetailElementCondition != null)
                    {
                        roofDetailElementCondition.Delete = true;
                        _roofDetailElementConditionService.UpdateRoofDetailElementCondition(roofDetailElementCondition);
                        output.Message = "Roof Detail Element Condition deleted successfully!";
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find Roof Detail Element Condition!";
                    output.Success = false;
                    return output;
                }
                output.Message = "Enter Proper id";
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
                    var roofDetailElementCondition = _roofDetailElementConditionService.GetRoofDetailElementCondition(id);
                    if (roofDetailElementCondition != null)
                    {
                        output.Data = roofDetailElementCondition;
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find Roof Detail Element Condition!";
                    output.Success = false;
                    return output;
                }
                output.Message = "Enter Proper id";
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
        [HttpGet]
        public object Get()
        {
            var output = new ResponseDetail();

            try
            {
                var roofDetailElementCondition = _roofDetailElementConditionService.GetAllRoofDetailElementConditions();
                output.Data = roofDetailElementCondition;
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
                var roofDetailElementCondition = _roofDetailElementConditionService.Get();
                output.Data = roofDetailElementCondition;
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
        [HttpGet("{request}")]
        public object Get(DataSourceRequest request)
        {
            var response = new ApiErrorDetail();

            try
            {
                var roofDetailElementCondition = _roofDetailElementConditionService.GetAllRoofDetailElementConditions();
                var kendoList = roofDetailElementCondition.ToDataSourceResult(request);
                return kendoList;
            }
            catch (Exception ex)
            {
                return ErrorHelper.KendoCatchBloackResponse(response, ex);
            }
        }
    }
}