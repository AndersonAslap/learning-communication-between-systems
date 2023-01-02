import { Resolver, Query } from "type-graphql";

@Resolver()
export class CategoryResolver {

    @Query(() => String)
    async listCategories() {
        return 'List Categories'
    }
}