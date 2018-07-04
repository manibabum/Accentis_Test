FROM microsoft/dotnet:2.1-sdk as build

ARG login="J.vanmegchelen@tagologic.com"
ARG pass="Tilanus80"

RUN apt-get update && apt-get install -y nuget && \
    nuget source add -name "telerik.com" -source "https://nuget.telerik.com/nuget" \
    -username ${login} -password ${pass} -storepasswordincleartext && \
    apt-get clean

WORKDIR /app
COPY *.sln ./
COPY Accentis.Api/*.csproj ./Accentis.Api/
COPY Accentis.Business/*.csproj ./Accentis.Business/
COPY Accentis.Business.Contracts/*.csproj ./Accentis.Business.Contracts/
COPY Accentis.Business.Dal/*.csproj ./Accentis.Business.Dal/
COPY Accentis.Business.Services/*.csproj ./Accentis.Business.Services/
COPY Accentis.Database.Domain/*.csproj ./Accentis.Database.Domain/
COPY Accentis.Database.Migrations/*.csproj ./Accentis.Database.Migrations/

RUN dotnet restore --configfile /root/.config/NuGet/NuGet.Config

COPY ./ ./
WORKDIR /app/Accentis.Api
RUN dotnet build
RUN dotnet publish -c Release -o out