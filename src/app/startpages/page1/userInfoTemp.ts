export interface userinfo {
    nickname: string,
    agreed: Boolean,
    mentOptions: {
        autism: { selected: false, style: null },
        adhd: { selected: false, style: null },
        ocd: { selected: false, style: null },
        depression: { selected: false, style: null },
        bipolar: { selected: false, style: null },
        ptsd: { selected: false, style: null },
        selfharm: { selected: false, style: null },
        schizo: { selected: false, style: null },
        eatingd: { selected: false, style: null },
        anxiety: { selected: false, style: null }
    }
}