using System;

namespace Accentis.Business.Model
{
    public class DefactsModel
    {
        public int? DefactID { get; set; }
        public string Description { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }        
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}
