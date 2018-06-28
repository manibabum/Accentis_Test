using System;
using System.Collections.Generic;
using System.Text;

namespace Accentis.Business.Model
{
    public class RoofComponentsModel
    {
        public int? RCID { get; set; }
        public string Description { get; set; }    
        public string Unit { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}
