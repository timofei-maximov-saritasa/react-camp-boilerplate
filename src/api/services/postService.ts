import { Post } from '../../models/post';
import { PostDto } from '../dtos/postDto';
import { PostMapper } from '../mappers/postMapper';

export namespace PostService {

  /** Fetches posts. */
  export async function fetchPosts(): Promise<Post[]> {
    const response = await fetch(`${import.meta.env.APP_API_BASE_URL}/posts`);
    const data = (await response.json()) as PostDto[];
    return data.map(dto => PostMapper.fromDto(dto));
  }
}
