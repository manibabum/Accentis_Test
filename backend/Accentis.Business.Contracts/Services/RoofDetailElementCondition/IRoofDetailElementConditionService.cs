using Accentis.Database.Domain.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accentis.Business.Contracts.Services.RoofDetailElementCondition
{
   public interface IRoofDetailElementConditionService
    {
        void CreateRoofDetailElementCondition(RoofDetailElementConditions roofDetailElementConditions);

        void UpdateRoofDetailElementCondition(RoofDetailElementConditions roofDetailElementConditions);

        RoofDetailElementConditions GetRoofDetailElementCondition(int id);

        List<RoofDetailElementConditions> GetAllRoofDetailElementConditions();

        List<RoofDetailElementConditions> Get();
    }
}
