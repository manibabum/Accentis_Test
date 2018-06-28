using Accentis.Business.Contracts.Services.ContractDuties;
using Accentis.Business.Helpers;
using Accentis.Business.Model;
using Accentis.Business.Services.ContractDuties;
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
    [Route("api/ContractDuties")]
    public class ContractDutiesController : Controller
    {
        #region Properties
        private readonly IContractDutiesService _contractDutiesService;
        #endregion

        #region Constructor
        public ContractDutiesController()
        {
            _contractDutiesService = new ContractDutiesService();
        }
        #endregion

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPost]
        public object Post([FromBody]ContractDutyModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var contractDuties = Mapper.Map<ContractDuty>(model);
                    _contractDutiesService.CreateContractDuties(contractDuties);
                    output.Message = "Contract Duties created successfully!";
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
        public object Put([FromBody]ContractDutyModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var contractDuties = Mapper.Map<ContractDuty>(model);
                    _contractDutiesService.UpdateContractDuties(contractDuties);
                    output.Message = "Contract Duties updated successfully!";
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
                    var contractDuties = _contractDutiesService.GetContractDuty(id);
                    if (contractDuties != null)
                    {
                        contractDuties.Delete = true;
                        _contractDutiesService.UpdateContractDuties(contractDuties);
                        output.Message = "Contract Duties deleted successfully!";
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find contract duty!";
                    output.Success = false;
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
                    var contractDuties = _contractDutiesService.GetContractDuty(id);
                    if (contractDuties != null)
                    {
                        output.Data = contractDuties;
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find contract duty!";
                    output.Success = false;
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
                var contractDuties = _contractDutiesService.GetAllContractDuties();
                if (contractDuties != null)
                {
                    output.Data = contractDuties;
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
        [Route("GetAll")]
        public object GetAll()
        {
            var output = new ResponseDetail();
            try
            {
                var contractDuties = _contractDutiesService.Get();
                if (contractDuties != null)
                {
                    output.Data = contractDuties;
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
        [HttpGet("{request}")]
        public object Get(DataSourceRequest request)
        {
            var response = new ApiErrorDetail();
            try
            {
                var contractDuties = _contractDutiesService.GetAllContractDuties();
                var kendoList = contractDuties.ToDataSourceResult(request);
                return kendoList;
            }
            catch (Exception ex)
            {
                return ErrorHelper.KendoCatchBloackResponse(response, ex);
            }
        }

    }
}