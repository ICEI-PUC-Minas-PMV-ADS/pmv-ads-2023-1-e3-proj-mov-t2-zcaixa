CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Categoria]    Script Date: 15/03/2023 18:24:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categoria](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nome] [nvarchar](100) NOT NULL,
	[Tipo] [char](1) NOT NULL,
	[Username] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_Categoria_Id] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Lancamento]    Script Date: 15/03/2023 18:24:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Lancamento](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Data] [date] NOT NULL,
	[Descricao] [nvarchar](100) NULL,
	[Tipo] [char](1) NOT NULL,
	[Valor] [money] NOT NULL,
	[Conciliado] [bit] NOT NULL,
	[Username] [nvarchar](450) NOT NULL,
	[CatId] [int] NOT NULL,
 CONSTRAINT [Lancamento_Id] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 15/03/2023 18:24:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[Username] [nvarchar](450) NOT NULL,
	[Nome] [nvarchar](150) NOT NULL,
	[UltimoNome] [nvarchar](150) NULL,
	[Senha] [nvarchar](max) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Telefone] [nvarchar](11) NULL,
	[DataNascimento] [datetime2](7) NOT NULL,
	[Meta] [money] NULL,
	[MesConsulta] [int] NULL,
	[AnoConsulta] [int] NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[Username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Categoria]  WITH CHECK ADD  CONSTRAINT [Usuario_Categoria] FOREIGN KEY([Username])
REFERENCES [dbo].[Usuario] ([Username])
GO
ALTER TABLE [dbo].[Categoria] CHECK CONSTRAINT [Usuario_Categoria]
GO
ALTER TABLE [dbo].[Lancamento]  WITH CHECK ADD  CONSTRAINT [Categoria_Lancamento] FOREIGN KEY([CatId])
REFERENCES [dbo].[Categoria] ([Id])
GO
ALTER TABLE [dbo].[Lancamento] CHECK CONSTRAINT [Categoria_Lancamento]
GO
ALTER TABLE [dbo].[Lancamento]  WITH CHECK ADD  CONSTRAINT [Usuario_Lancamento] FOREIGN KEY([Username])
REFERENCES [dbo].[Usuario] ([Username])
GO
ALTER TABLE [dbo].[Lancamento] CHECK CONSTRAINT [Usuario_Lancamento]
GO
