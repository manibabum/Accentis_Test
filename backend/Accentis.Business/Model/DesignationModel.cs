using System;

namespace Accentis.Business.Model
{
    public class DesignationModel
    {
        
        public int? DesignationID { get; set; }
        public string DesignationName { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}