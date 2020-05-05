interface imageUrl {
    small: string,
    medium: string,
    large: string,
    full: string
}

export default interface NewsArticle {
    id: string,
    title: string,
    created: Date,
    changed: Date,
    ingress: string,
    size: number,
    theme: string,
    imageUrl: imageUrl,
    imageTitle: string
}
