using System;

namespace Accentis.Business.Model
{
  public class ObservedDefectsModel
    {
        public int? Odid { get; set; }
        public int Rdecid { get; set; }
        public int RoofId { get; set; }
        public DateTime InspectionDate { get; set; }
        public string Inspector { get; set; }
        public string Description { get; set; }
        public int Size { get; set; }
        public string Stage { get; set; }
        public string Restored { get; set; }
        public bool Delete { get; set; }

        public UserEditModel InspectorNavigation { get; set; }
        public RoofDetailElementConditionModel Rdec { get; set; }
        public RoofModel Roof { get; set; }
    }
}
