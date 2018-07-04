using System;
using System.Collections.Generic;

namespace Accentis.Database.Domain.Domain
{
    public partial class ObservedDefects
    {
        public int Odid { get; set; }
        public int Rdecid { get; set; }
        public int RoofId { get; set; }
        public DateTime InspectionDate { get; set; }
        public string Inspector { get; set; }
        public string Description { get; set; }
        public int Size { get; set; }
        public string Stage { get; set; }
        public string Restored { get; set; }
        public bool Delete { get; set; }

        public AspNetUsers InspectorNavigation { get; set; }
        public RoofDetailElementConditions Rdec { get; set; }
        public Roof Roof { get; set; }
    }
}
