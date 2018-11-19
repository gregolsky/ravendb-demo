export type AssetType = "Link" | "Downloadable" | "Document";

export interface DemoAssetDto {
    type: AssetType;
    title: string;
    url: string;
}

export interface LinesRangeDto {
    start: number;
    end: number;
}

export interface DemoWalkthroughDto {
    title: string;
    slug: string;
    descriptionHtml: string;
    lines: LinesRangeDto;
    assets: DemoAssetDto[];
}

export interface DemoDto {
    slug: string;
    sourceCode: string;
    usingsLastLine: number;
    title: string;
    descriptionHtml: string;
    assets: DemoAssetDto[];
    walkthroughs: DemoWalkthroughDto[];
}

export interface DemoParamsDto {
    [key:string]: any;
}

export interface DemoVersionDto {
    category: string;
    demo: string;
    hash: string;
}