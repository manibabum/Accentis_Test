using Accentis.Business.Model;
using System;
using Kendo.Mvc.UI;

namespace Accentis.Business.Helpers
{
    public class ErrorHelper
    {
        public static object ReturnCatchBlock(ApiErrorDetail response, Exception ex)
        {
            response.StatusCode = "1001";
            response.ErrorMessage = "Something Went Wrong : " + (ex.InnerException != null ? ex.InnerException.Message : ex.Message);
            return response;
        }

        public static DataSourceResult KendoCatchBloackResponse(ApiErrorDetail response, Exception ex)
        {
            response.StatusCode = "1001";
            response.ErrorMessage = "Something Went Wrong : " + (ex.InnerException != null ? ex.InnerException.Message : ex.Message);
            return new DataSourceResult
            {
                Errors = response.ErrorMessage
            };
        }

    }
}
