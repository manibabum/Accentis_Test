using System;
using System.Collections.Generic;

namespace Accentis.Database.Domain.Domain
{
    public partial class Roof
    {
        public Roof()
        {
            ElementConstructions = new HashSet<ElementConstructions>();
            ObservedDefects = new HashSet<ObservedDefects>();
            RoofAdviceMaintenance = new HashSet<RoofAdviceMaintenance>();
            RoofConstruction = new HashSet<RoofConstruction>();
            RoofDetailElementConditions = new HashSet<RoofDetailElementConditions>();
            RoofElement = new HashSet<RoofElement>();
            TaskMaster = new HashSet<TaskMaster>();
        }

        public int RoofId { get; set; }
        public int Rtid { get; set; }
        public int BuildingId { get; set; }
        public int InspectionId { get; set; }
        public string UserId { get; set; }
        public string RoofNumber { get; set; }
        public string Description { get; set; }
        public int Surface { get; set; }
        public int Height { get; set; }
        public string Orientation { get; set; }
        public string Access { get; set; }
        public string KeyNeeded { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public Building Building { get; set; }
        public Inspections Inspection { get; set; }
        public RoofType Rt { get; set; }
        public AspNetUsers User { get; set; }
        public ICollection<ElementConstructions> ElementConstructions { get; set; }
        public ICollection<ObservedDefects> ObservedDefects { get; set; }
        public ICollection<RoofAdviceMaintenance> RoofAdviceMaintenance { get; set; }
        public ICollection<RoofConstruction> RoofConstruction { get; set; }
        public ICollection<RoofDetailElementConditions> RoofDetailElementConditions { get; set; }
        public ICollection<RoofElement> RoofElement { get; set; }
        public ICollection<TaskMaster> TaskMaster { get; set; }
    }
}
