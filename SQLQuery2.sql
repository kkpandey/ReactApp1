USE [Demo2]
GO
/****** Object:  Table [dbo].[Tabl1]    Script Date: 2/29/2024 2:43:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tabl1](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ControlType] [nvarchar](50) NULL,
	[GridColumn] [nvarchar](50) NULL,
	[LabelEnglish] [nvarchar](50) NULL,
	[ValidationExp] [nvarchar](50) NULL,
	[MaxSize] [int] NULL,
	[LabelArabic] [nvarchar](50) NULL,
	[ValidatetionExpArabic] [nvarchar](50) NULL,
	[MaxSizeArabic] [int] NULL,
	[DisplayOrder] [int] NULL,
	[Mandatory] [bit] NULL,
 CONSTRAINT [PK_Tabl1] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
