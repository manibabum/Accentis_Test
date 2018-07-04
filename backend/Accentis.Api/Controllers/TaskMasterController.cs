using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Accentis.Business.Contracts.Services.TaskMasters;
using Accentis.Business.Helpers;
using Accentis.Business.Model;
using Accentis.Business.Services.TaskMasters;
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
    [Route("api/TaskMaster")]
    public class TaskMasterController : Controller
    {
        #region Properties
        private readonly ITaskMastersService _taskMastersService;
        #endregion

        #region Constructor
        public TaskMasterController()
        {
            _taskMastersService = new TaskMastersService();
        }
        #endregion

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPost]
        public object Post([FromBody]TaskMasterModel model)
        {
            var output = new ResponseDetail();
            try
            {
                if (ModelState.IsValid)
                {
                    var taskMasters = Mapper.Map<TaskMaster>(model);
                    _taskMastersService.CreateTaskMaster(taskMasters);
                    output.Message = "Task Master created successfully!";
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
        public object Put([FromBody]TaskMasterModel model)
        {
            var output = new ResponseDetail();
            try
            {
                if (ModelState.IsValid)
                {
                    var taskMasters = Mapper.Map<TaskMaster>(model);
                    _taskMastersService.UpdateTaskMaster(taskMasters);
                    output.Message = "Task Master updated successfully!";
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
                    var taskMasters = _taskMastersService.GetTaskMaster(id);
                    if (taskMasters != null)
                    {
                        taskMasters.Delete = true;
                        _taskMastersService.UpdateTaskMaster(taskMasters);
                        output.Message = "Task Master deleted successfully!";
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Something went wrong!";
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
                    var taskMasters = _taskMastersService.GetTaskMaster(id);
                    if (taskMasters != null)
                    {
                        output.Data = taskMasters;
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Something went wrong!";
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
                var taskMasters = _taskMastersService.GetTaskMasters();
                if (taskMasters != null)
                {
                    output.Data = taskMasters;
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
                var taskMasters = _taskMastersService.GetTaskMasters();
                var kendoList = taskMasters.ToDataSourceResult(request);
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
                var taskMasters = _taskMastersService.Get();
                if (taskMasters != null)
                {
                    output.Data = taskMasters;
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
    }
}