using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Accentis.Business.Contracts.Services.Roles;
using Accentis.Business.Helpers;
using Accentis.Business.Model;
using AutoMapper;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Accentis.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/RoleApi")]
    public class RoleApiController : Controller
    {
        #region Properties
        private readonly IRoleService _roleService;
        private readonly RoleManager<IdentityRole> _RoleManager;
        #endregion

        #region Constructor
        public RoleApiController(RoleManager<IdentityRole> roleManager, IRoleService roleService)
        {
            _RoleManager = roleManager;
            _roleService = roleService;
        }
        #endregion

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPost("{role}")]
        public async Task<object> Post(string role)
        {

            var output = new ResponseDetail();
            try
            {
                if (!string.IsNullOrEmpty(role))
                {
                    var roleList = _RoleManager.Roles.ToList();
                    var count = roleList.Any(x => x.Name.ToLower() == role.ToLower());
                    if (!count)
                    {
                        var roleResult = await _RoleManager.CreateAsync(new IdentityRole(role));
                        if (roleResult.Succeeded)
                        {
                            output.Message = "Role Created Sucessfully";
                            output.Success = true;
                            return output;
                        }
                    }
                    else
                    {
                        output.Message = "Role already exists!";
                        output.Success = false;
                        return output;
                    }
                }
                output.Message = "Please Enter Role!";
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
        public async Task<object> Put(string roleId, string role)
        {
            var output = new ResponseDetail();

            try
            {
                if (!string.IsNullOrEmpty(role) && !string.IsNullOrEmpty(roleId))
                {
                    var roleList = _RoleManager.Roles.ToList();
                    var count = roleList.Any(x => x.Name.ToLower() == role.ToLower());
                    if (!count)
                    {
                        var roleDetail = await _RoleManager.FindByIdAsync(roleId);
                        roleDetail.Name = role;
                        var checkRole = await _RoleManager.UpdateAsync(roleDetail);
                        if (checkRole.Succeeded)
                        {
                            output.Success = true;
                            output.Message = "Role Updated Sucessfully!";
                            return output;
                        }
                    }
                    else
                    {
                        output.Success = false;
                        output.Message = "Role already exists!";
                        return output;
                    }
                }
                output.Message = "Please Enter Role!";
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
        public DataSourceResult Get(DataSourceRequest request)
        {
            var response = new ApiErrorDetail();
            try
            {
                var roleList = _RoleManager.Roles.OrderByDescending(x=>x.Id).ToList();
                return roleList.ToDataSourceResult(request);

            }
            catch (Exception ex)
            {
                return ErrorHelper.KendoCatchBloackResponse(response, ex);
            }
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet("{roleId}")]
        public async Task<object> Get(string roleId)
        {

            var output = new ResponseDetail();
            try
            {
                if (!string.IsNullOrEmpty(roleId))
                {
                    var roleDetail = await _RoleManager.FindByIdAsync(roleId);
                    if (roleDetail != null)
                    {
                        var role = Mapper.Map<IdentityRole>(roleDetail);
                        output.Success = true;
                        output.Data = role;
                        return output;
                    }
                    output.Message = "No Record found";
                    output.Success = false;
                    return output;
                }
                //output.Message = "RoleId can not be empty";
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
        [HttpDelete("{roleId}")]
        public async Task<object> Delete(string roleId)
        {

            var output = new ResponseDetail();

            try
            {
                if (!string.IsNullOrEmpty(roleId))
                {
                    var role = _RoleManager.Roles.ToList().FirstOrDefault(x => x.Id == roleId);

                    var checkRole = await _RoleManager.DeleteAsync(role);
                    if (checkRole.Succeeded)
                    {
                        output.Success = true;
                        output.Message = "Role Delete Sucessfully!";
                        return output;
                    }
                    output.Success = false;
                    output.Message = "Error Occured";
                    return output;
                }
                //output.Message = "RoleId can not be empty";
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
        [Route("GetAllRole")]
        [HttpGet]
        public object Get()
        {

            var output = new ResponseDetail();
            try
            {
                var allRoles = _RoleManager.Roles.OrderByDescending(x=>x.Id).ToList();
                if (allRoles != null)
                {
                    var roleDetail = Mapper.Map<List<IdentityRole>>(allRoles);
                    output.Success = true;
                    output.Data = roleDetail;
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

    }
}