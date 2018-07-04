using System;

namespace Accentis.Business.Model
{
   public class TaskMasterModel
    {
        public int? TaskId { get; set; }
        public string TaskName { get; set; }
        public int RoofId { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public RoofModel Roof { get; set; }
    }
}
