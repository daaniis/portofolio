import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BlogService } from './blog.service';
import { Blog } from './entities/blog.entity';
import { CreateBlogInput } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';
import { UseGuards } from '@nestjs/common';
import { PublicGuard } from 'src/public.guard';

@Resolver(() => Blog)
@UseGuards(PublicGuard)
export class BlogResolver {
  constructor(private readonly blogService: BlogService) {}

  @Mutation(() => Blog)
  createBlog(@Args('createBlogInput') createBlogInput: CreateBlogInput) {
    return this.blogService.create(createBlogInput);
  }

  @Query(() => Blog)
  getBlog(
    @Args('id_blog', { type: () => Int }) id_blog: number,
  ): Promise<Blog> {
    const blog = this.blogService.getBlogbyID(id_blog);
    this.blogService.incrementVisitor(id_blog);
    return blog;
  }

  @Query(() => [Blog], { name: 'queryBlogs' })
  findAll() {
    return this.blogService.findAll();
  }

  @Query(() => Blog, { name: 'blog' })
  findOne(@Args('id', { type: () => String }) id_blog: number) {
    return this.blogService.findOne(id_blog);
  }

  @Mutation(() => Blog)
  updateBlog(@Args('updateBlogInput') updateBlogInput: UpdateBlogInput) {
    return this.blogService.update(
      updateBlogInput.id_jenisblog,
      updateBlogInput,
    );
  }

  @Mutation(() => Blog)
  removeBlog(@Args('id_blog', { type: () => String }) id_blog: number) {
    return this.blogService.remove(id_blog);
  }
}
