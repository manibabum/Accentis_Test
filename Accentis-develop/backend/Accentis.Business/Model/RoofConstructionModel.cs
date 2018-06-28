using System;
using System.Collections.Generic;
using System.Text;

namespace Accentis.Business.Model
{
    public class RoofConstructionModel
    {
        public int? Rsid { get; set; }
        public int RoofId { get; set; }
        public string Part { get; set; }
        public string TypeOfConstruction { get; set; }
        public DateTime DateRecording { get; set; }
        public string Inspector { get; set; }
        public string Explanation { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public UserEditModel InspectorNavigation { get; set; }
        public RoofModel Roof { get; set; }
    }
}
