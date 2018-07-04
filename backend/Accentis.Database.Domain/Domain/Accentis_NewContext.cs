using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Accentis.Database.Domain.Domain
{
    public partial class Accentis_NewContext : DbContext
    {
        public Accentis_NewContext()
        {
        }

        public Accentis_NewContext(DbContextOptions<Accentis_NewContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AspNetRoleClaims> AspNetRoleClaims { get; set; }
        public virtual DbSet<AspNetRoles> AspNetRoles { get; set; }
        public virtual DbSet<AspNetUserClaims> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogins> AspNetUserLogins { get; set; }
        public virtual DbSet<AspNetUserRoles> AspNetUserRoles { get; set; }
        public virtual DbSet<AspNetUsers> AspNetUsers { get; set; }
        public virtual DbSet<AspNetUserTokens> AspNetUserTokens { get; set; }
        public virtual DbSet<Building> Building { get; set; }
        public virtual DbSet<BuildingAdviceMaintenance> BuildingAdviceMaintenance { get; set; }
        public virtual DbSet<BuildingDocument> BuildingDocument { get; set; }
        public virtual DbSet<BuildingPictures> BuildingPictures { get; set; }
        public virtual DbSet<BuildingType> BuildingType { get; set; }
        public virtual DbSet<ConstructionParts> ConstructionParts { get; set; }
        public virtual DbSet<ContractDuty> ContractDuty { get; set; }
        public virtual DbSet<Defacts> Defacts { get; set; }
        public virtual DbSet<Demoes> Demoes { get; set; }
        public virtual DbSet<Designation> Designation { get; set; }
        public virtual DbSet<ElementConstructions> ElementConstructions { get; set; }
        public virtual DbSet<EmpDetials> EmpDetials { get; set; }
        public virtual DbSet<Inspections> Inspections { get; set; }
        public virtual DbSet<MigrationHistory> MigrationHistory { get; set; }
        public virtual DbSet<ObservedDefects> ObservedDefects { get; set; }
        public virtual DbSet<Roof> Roof { get; set; }
        public virtual DbSet<RoofAdviceMaintenance> RoofAdviceMaintenance { get; set; }
        public virtual DbSet<RoofComponents> RoofComponents { get; set; }
        public virtual DbSet<RoofConstruction> RoofConstruction { get; set; }
        public virtual DbSet<RoofDetailElementConditions> RoofDetailElementConditions { get; set; }
        public virtual DbSet<RoofElement> RoofElement { get; set; }
        public virtual DbSet<RoofType> RoofType { get; set; }
        public virtual DbSet<TaskMaster> TaskMaster { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=192.168.0.150;Initial Catalog=Accentis_New;User ID=sa; Password=ifour@1234");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AspNetRoleClaims>(entity =>
            {
                entity.HasIndex(e => e.RoleId);

                entity.Property(e => e.RoleId)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetRoleClaims)
                    .HasForeignKey(d => d.RoleId);
            });

            modelBuilder.Entity<AspNetRoles>(entity =>
            {
                entity.HasIndex(e => e.Name)
                    .HasName("RoleNameIndex")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasMaxLength(128)
                    .ValueGeneratedNever();

                entity.Property(e => e.ConcurrencyStamp)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.Property(e => e.NormalizedName)
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<AspNetUserClaims>(entity =>
            {
                entity.HasIndex(e => e.UserId)
                    .HasName("IX_UserId");

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserClaims)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_dbo.AspNetUserClaims_dbo.AspNetUsers_UserId");
            });

            modelBuilder.Entity<AspNetUserLogins>(entity =>
            {
                entity.HasKey(e => new { e.LoginProvider, e.ProviderKey, e.UserId });

                entity.HasIndex(e => e.UserId)
                    .HasName("IX_UserId");

                entity.Property(e => e.LoginProvider).HasMaxLength(128);

                entity.Property(e => e.ProviderKey).HasMaxLength(128);

                entity.Property(e => e.UserId).HasMaxLength(128);

                entity.Property(e => e.ProviderDisplayName)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserLogins)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_dbo.AspNetUserLogins_dbo.AspNetUsers_UserId");
            });

            modelBuilder.Entity<AspNetUserRoles>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.RoleId });

                entity.HasIndex(e => e.RoleId)
                    .HasName("IX_RoleId");

                entity.HasIndex(e => e.UserId)
                    .HasName("IX_UserId");

                entity.Property(e => e.UserId).HasMaxLength(128);

                entity.Property(e => e.RoleId).HasMaxLength(128);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("FK_dbo.AspNetUserRoles_dbo.AspNetRoles_RoleId");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_dbo.AspNetUserRoles_dbo.AspNetUsers_UserId");
            });

            modelBuilder.Entity<AspNetUsers>(entity =>
            {
                entity.HasIndex(e => e.UserName)
                    .HasName("UserNameIndex")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasMaxLength(128)
                    .ValueGeneratedNever();

                entity.Property(e => e.Address).IsRequired();

                entity.Property(e => e.ConcurrencyStamp)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Contact)
                    .IsRequired()
                    .HasMaxLength(15);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.DesignationId).HasColumnName("DesignationID");

                entity.Property(e => e.Email).HasMaxLength(256);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.LockoutEndDateUtc).HasColumnType("datetime");

                entity.Property(e => e.MiddelName)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.NormalizedEmail)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.NormalizedUserName)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.RoleId)
                    .IsRequired()
                    .HasColumnName("RoleID")
                    .HasMaxLength(128);

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.HasOne(d => d.Designation)
                    .WithMany(p => p.AspNetUsers)
                    .HasForeignKey(d => d.DesignationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__AspNetUse__Desig__3E52440B");

                entity.HasOne(d => d.IdNavigation)
                    .WithOne(p => p.InverseIdNavigation)
                    .HasForeignKey<AspNetUsers>(d => d.Id)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AspNetUsers_Designation");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetUsers)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__AspNetUse__RoleI__4BAC3F29");
            });

            modelBuilder.Entity<AspNetUserTokens>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.LoginProvider, e.Name });
            });

            modelBuilder.Entity<Building>(entity =>
            {
                entity.Property(e => e.Address).IsUnicode(false);

                entity.Property(e => e.BuildingNumber)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Client)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.ContactPerson)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ContractNumber)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.ManagementCode)
                    .HasMaxLength(256)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Photo)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.StreetView)
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.Telephone)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Title)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.YearOfConstruction)
                    .IsRequired()
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.HasOne(d => d.BuildingType)
                    .WithMany(p => p.Building)
                    .HasForeignKey(d => d.BuildingTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Building_Building_Type");
            });

            modelBuilder.Entity<BuildingAdviceMaintenance>(entity =>
            {
                entity.HasKey(e => e.AdviceId);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Element)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Measure)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Part)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Space)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.HasOne(d => d.Building)
                    .WithMany(p => p.BuildingAdviceMaintenance)
                    .HasForeignKey(d => d.BuildingId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BuildingAdviceMaintenance_Building");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.BuildingAdviceMaintenance)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BuildingAdviceMaintenance_AspNetUsers");
            });

            modelBuilder.Entity<BuildingDocument>(entity =>
            {
                entity.HasKey(e => e.DocumentId);

                entity.Property(e => e.DocumentId).HasColumnName("DocumentID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(300);

                entity.Property(e => e.File)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.HasOne(d => d.Building)
                    .WithMany(p => p.BuildingDocument)
                    .HasForeignKey(d => d.BuildingId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BuildingDocument_Building");
            });

            modelBuilder.Entity<BuildingPictures>(entity =>
            {
                entity.HasKey(e => e.Bpid);

                entity.Property(e => e.Bpid).HasColumnName("BPID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Picture)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.HasOne(d => d.Building)
                    .WithMany(p => p.BuildingPictures)
                    .HasForeignKey(d => d.BuildingId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BuildingPictures_Building");
            });

            modelBuilder.Entity<BuildingType>(entity =>
            {
                entity.ToTable("Building_Type");

                entity.Property(e => e.BuildingTypeId).HasColumnName("BuildingTypeID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.TypeName)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<ConstructionParts>(entity =>
            {
                entity.HasKey(e => e.Cpid);

                entity.Property(e => e.Cpid).HasColumnName("CPID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.Property(e => e.Lamda)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.Property(e => e.LayerType)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<ContractDuty>(entity =>
            {
                entity.HasKey(e => e.Cdid);

                entity.Property(e => e.Cdid).HasColumnName("CDID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.TaskCode)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Value)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.HasOne(d => d.Building)
                    .WithMany(p => p.ContractDuty)
                    .HasForeignKey(d => d.BuildingId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ContractDuty_Building");
            });

            modelBuilder.Entity<Defacts>(entity =>
            {
                entity.HasKey(e => e.DefactId);

                entity.Property(e => e.DefactId).HasColumnName("DefactID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description).IsRequired();

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<Demoes>(entity =>
            {
                entity.HasKey(e => e.MyProperty);
            });

            modelBuilder.Entity<Designation>(entity =>
            {
                entity.Property(e => e.DesignationId).HasColumnName("DesignationID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.DesignationName)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");
            });

            modelBuilder.Entity<ElementConstructions>(entity =>
            {
                entity.HasKey(e => e.Rseid);

                entity.Property(e => e.Rseid).HasColumnName("RSEID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Lambda)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.Property(e => e.LayerDescription)
                    .IsRequired()
                    .HasColumnType("text");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Part)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.Property(e => e.RoofId).HasColumnName("RoofID");

                entity.Property(e => e.Rsid).HasColumnName("RSID");

                entity.Property(e => e.Thickness)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.HasOne(d => d.Roof)
                    .WithMany(p => p.ElementConstructions)
                    .HasForeignKey(d => d.RoofId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ElementConstructions_Roof");

                entity.HasOne(d => d.Rs)
                    .WithMany(p => p.ElementConstructions)
                    .HasForeignKey(d => d.Rsid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ElementConstructions_RoofConstruction");
            });

            modelBuilder.Entity<EmpDetials>(entity =>
            {
                entity.HasKey(e => e.EmpId);
            });

            modelBuilder.Entity<Inspections>(entity =>
            {
                entity.HasKey(e => e.InspectionId);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasColumnType("text");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.HasOne(d => d.Building)
                    .WithMany(p => p.Inspections)
                    .HasForeignKey(d => d.BuildingId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Inspections_Building");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Inspections)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Inspections_AspNetUsers");
            });

            modelBuilder.Entity<MigrationHistory>(entity =>
            {
                entity.HasKey(e => new { e.MigrationId, e.ContextKey });

                entity.ToTable("__MigrationHistory");

                entity.Property(e => e.MigrationId).HasMaxLength(150);

                entity.Property(e => e.ContextKey).HasMaxLength(300);

                entity.Property(e => e.Model).IsRequired();

                entity.Property(e => e.ProductVersion)
                    .IsRequired()
                    .HasMaxLength(32);
            });

            modelBuilder.Entity<ObservedDefects>(entity =>
            {
                entity.HasKey(e => e.Odid);

                entity.Property(e => e.Odid).HasColumnName("ODId");

                entity.Property(e => e.Description).IsRequired();

                entity.Property(e => e.InspectionDate).HasColumnType("datetime");

                entity.Property(e => e.Inspector)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.Property(e => e.Rdecid).HasColumnName("RDECId");

                entity.Property(e => e.Restored)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.Stage)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.HasOne(d => d.InspectorNavigation)
                    .WithMany(p => p.ObservedDefects)
                    .HasForeignKey(d => d.Inspector)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ObservedDefects_AspNetUsers");

                entity.HasOne(d => d.Rdec)
                    .WithMany(p => p.ObservedDefects)
                    .HasForeignKey(d => d.Rdecid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ObservedDefects_RoofDetailElementConditions");

                entity.HasOne(d => d.Roof)
                    .WithMany(p => p.ObservedDefects)
                    .HasForeignKey(d => d.RoofId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ObservedDefects_Roof");
            });

            modelBuilder.Entity<Roof>(entity =>
            {
                entity.Property(e => e.Access)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.Property(e => e.KeyNeeded)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Orientation)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.Property(e => e.RoofNumber)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.Property(e => e.Rtid).HasColumnName("RTID");

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.HasOne(d => d.Building)
                    .WithMany(p => p.Roof)
                    .HasForeignKey(d => d.BuildingId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Roof_Building");

                entity.HasOne(d => d.Inspection)
                    .WithMany(p => p.Roof)
                    .HasForeignKey(d => d.InspectionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Roof_Inspections");

                entity.HasOne(d => d.Rt)
                    .WithMany(p => p.Roof)
                    .HasForeignKey(d => d.Rtid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Roof_Roof_type");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Roof)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Roof_AspNetUsers");
            });

            modelBuilder.Entity<RoofAdviceMaintenance>(entity =>
            {
                entity.HasKey(e => e.AdviceId);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Element)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Measure)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Part)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Space)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.HasOne(d => d.Roof)
                    .WithMany(p => p.RoofAdviceMaintenance)
                    .HasForeignKey(d => d.RoofId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RoofAdviceMaintenance_Roof");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.RoofAdviceMaintenance)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RoofAdviceMaintenance_AspNetUsers");
            });

            modelBuilder.Entity<RoofComponents>(entity =>
            {
                entity.HasKey(e => e.Rcid);

                entity.ToTable("Roof_Components");

                entity.Property(e => e.Rcid).HasColumnName("RCID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasColumnType("text");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Unit)
                    .IsRequired()
                    .HasMaxLength(10);
            });

            modelBuilder.Entity<RoofConstruction>(entity =>
            {
                entity.HasKey(e => e.Rsid);

                entity.Property(e => e.Rsid).HasColumnName("RSID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.DateRecording).HasColumnType("datetime");

                entity.Property(e => e.Explanation)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.Property(e => e.Inspector)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Part)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.Property(e => e.TypeOfConstruction)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.HasOne(d => d.InspectorNavigation)
                    .WithMany(p => p.RoofConstruction)
                    .HasForeignKey(d => d.Inspector)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RoofConstruction_AspNetUsers");

                entity.HasOne(d => d.Roof)
                    .WithMany(p => p.RoofConstruction)
                    .HasForeignKey(d => d.RoofId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RoofConstruction_Roof");
            });

            modelBuilder.Entity<RoofDetailElementConditions>(entity =>
            {
                entity.HasKey(e => e.Rdecid);

                entity.Property(e => e.Rdecid).HasColumnName("RDECId");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.CurrentCondition)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.InspectionMethod)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Inspector)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Norm)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.HasOne(d => d.DefactsNavigation)
                    .WithMany(p => p.RoofDetailElementConditions)
                    .HasForeignKey(d => d.Defacts)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RoofDetailElementCondition_Defacts");

                entity.HasOne(d => d.InspectorNavigation)
                    .WithMany(p => p.RoofDetailElementConditions)
                    .HasForeignKey(d => d.Inspector)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RoofDetailElementCondition_AspNetUsers");

                entity.HasOne(d => d.Roof)
                    .WithMany(p => p.RoofDetailElementConditions)
                    .HasForeignKey(d => d.RoofId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RoofDetailElementCondition_Roof");
            });

            modelBuilder.Entity<RoofElement>(entity =>
            {
                entity.HasKey(e => e.Reid);

                entity.Property(e => e.Reid).HasColumnName("REID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.CurrentCondition)
                    .IsRequired()
                    .HasColumnName("Current_Condition")
                    .HasMaxLength(256);

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.Element)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Part)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.Property(e => e.StandardCondition)
                    .IsRequired()
                    .HasColumnName("Standard_Condition")
                    .HasMaxLength(256);

                entity.HasOne(d => d.Roof)
                    .WithMany(p => p.RoofElement)
                    .HasForeignKey(d => d.RoofId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RoofElement_Roof");
            });

            modelBuilder.Entity<RoofType>(entity =>
            {
                entity.HasKey(e => e.Rtid);

                entity.ToTable("Roof_type");

                entity.Property(e => e.Rtid).HasColumnName("RTID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.TypeName)
                    .IsRequired()
                    .HasMaxLength(256);
            });

            modelBuilder.Entity<TaskMaster>(entity =>
            {
                entity.HasKey(e => e.TaskId);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.TaskName)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.HasOne(d => d.Roof)
                    .WithMany(p => p.TaskMaster)
                    .HasForeignKey(d => d.RoofId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_TaskMaster_Roof1");
            });
        }
    }
}
