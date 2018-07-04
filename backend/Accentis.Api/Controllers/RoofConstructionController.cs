using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Accentis.Business.Contracts.Services.RoofConstructions;
using Accentis.Business.Helpers;
using Accentis.Business.Model;
using Accentis.Business.Services.RoofConstructions;
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
    [Route("api/RoofConstruction")]
    public class RoofConstructionController : Controller
    {
        #region Properties
        private readonly IRoofConstructionsService _roofConstructionsService;
        #endregion

        #region Constructors
        public RoofConstructionController()
        {
            _roofConstructionsService = new RoofConstructionService();
        }
        #endregion

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPost]
        public object Post([FromBody]RoofConstructionModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var roofConstructions = Mapper.Map<RoofConstruction>(model);
                    _roofConstructionsService.CreateRoofConstruction(roofConstructions);
                    output.Message = "Roof construction created successfully!";
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
        public object Put([FromBody]RoofConstructionModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var roofConstructions = Mapper.Map<RoofConstruction>(model);
                    _roofConstructionsService.UpdateRoofConstruction(roofConstructions);
                    output.Message = "Roof constructions updated successfully!";
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
                    var roofConstructions = _roofConstructionsService.GetRoofConstruction(id);
                    if (roofConstructions != null)
                    {
                        roofConstructions.Delete = true;
                        _roofConstructionsService.UpdateRoofConstruction(roofConstructions);
                        output.Message = "Roof constructions deleted successfully!";
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find roof construction!";
                    output.Success = false;
                    return output;
                }
                //output.Message = "Enter proper id!";
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
                    var roofConstruction = _roofConstructionsService.GetRoofConstruction(id);
                    if (roofConstruction != null)
                    {
                        output.Data = roofConstruction;
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find roof construction!";
                    output.Success = false;
                    return output;
                }
                output.Message = "Enter proper id!";
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
                var roofConstruction = _roofConstructionsService.GetAllRoofConstructions();
                if (roofConstruction != null)
                {
                    output.Data = roofConstruction;
                    output.Success = true;
                    return output;
                }
                output.Message = "No roof constructions found!";
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
                var roofConstruction = _roofConstructionsService.Get();
                if (roofConstruction != null)
                {
                    output.Data = roofConstruction;
                    output.Success = true;
                    return output;
                }
                output.Message = "No roof constructions found!";
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
            var respone = new ApiErrorDetail();

            try
            {
                var roofDetail = _roofConstructionsService.GetAllRoofConstructions();
                var kendoList = roofDetail.ToDataSourceResult(request);
                return kendoList;
            }
            catch (Exception ex)
            {
                return ErrorHelper.KendoCatchBloackResponse(respone, ex);
            }
        }
    }
}