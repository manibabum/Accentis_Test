using System;
using Accentis.Business.Contracts.Services.Defact;
using Accentis.Business.Helpers;
using Accentis.Business.Model;
using Accentis.Business.Services.Defact;
using Accentis.Database.Domain.Domain;
using AutoMapper;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace Accentis.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Defacts")]
    public class DefactsController : Controller
    {
        #region Properties
        private readonly IDefactsService _defactService;
        #endregion

        #region Constructor
        public DefactsController()
        {
            _defactService = new DefactsService();
        }
        #endregion

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet]
        public object Get(DataSourceRequest request)
        {
            var response = new ApiErrorDetail();
            try
            {
                var defactList = _defactService.GetAllDefects().ToList();
                var kendoList = defactList.ToDataSourceResult(request);
                return kendoList;

            }
            catch (Exception ex)
            {
                return ErrorHelper.KendoCatchBloackResponse(response, ex);
            }
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [Route("GetAllDefect")]
        [HttpGet]
        public object Get()
        {
            var output = new ResponseDetail();

            try
            {
                var defactList = _defactService.GetAllDefects();
                output.Data = defactList;
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
                var defactList = _defactService.Get();
                output.Data = defactList;
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
        public object Post([FromBody]DefactsModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var defacts = Mapper.Map<Defacts>(model);
                    _defactService.CreateDefact(defacts);
                    output.Success = true;
                    output.Message = "Defact Created Successfully!";
                    return output;
                }
                output.Success = false;
                output.Message = "Something went wrong!";
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
        public object Put([FromBody]DefactsModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var defacts = Mapper.Map<Defacts>(model);
                    _defactService.UpdateDefact(defacts);
                    output.Success = true;
                    output.Message = "Defact updated Successfully!";
                    return output;
                }
                output.Success = false;
                output.Message = "Something went wrong!";
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
                    var defacts = _defactService.GetDefacts(id);
                    if (defacts != null)
                    {
                        output.Data = defacts;
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find defact!";
                    output.Success = false;
                    return output;
                }
                //output.Message = "Enter proper id";
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
                var defacts = _defactService.GetDefacts(id);
                if (defacts != null)
                {
                    defacts.Delete = true;
                    _defactService.UpdateDefact(defacts);
                    output.Success = true;
                    return output;
                }
                output.Message = "Unable to find defact!";
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
    }
}