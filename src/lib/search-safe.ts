// Strips characters that break PostgREST's .or() filter syntax (comma
// separates conditions, parens group them) so a search term containing
// them doesn't corrupt or error out the query.
export const searchSafe = (q: string) => q.replace(/[,()]/g, "");
