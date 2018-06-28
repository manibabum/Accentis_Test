using System;
using System.Collections.Generic;

namespace Accentis.Database.Domain.Domain
{
    public partial class RoofComponents
    {
        public int Rcid { get; set; }
        public string Description { get; set; }
        public string Unit { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}
