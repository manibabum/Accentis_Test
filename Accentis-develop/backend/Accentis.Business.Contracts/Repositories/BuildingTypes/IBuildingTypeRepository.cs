﻿using Accentis.Business.Contracts.Repositories.General;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Repositories.BuildingTypes
{
    public interface IBuildingTypeRepository: IBaseRepository<BuildingType>
    {
        List<BuildingType> GetBuildingTypes();
    }
}
