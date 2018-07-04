using System;
using System.Collections.Generic;

namespace Accentis.Database.Domain.Domain
{
    public partial class TaskMaster
    {
        public int TaskId { get; set; }
        public string TaskName { get; set; }
        public int RoofId { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public Roof Roof { get; set; }
    }
}
