import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';

@Resolver(of => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService
  ) {}

  @Query(returns => LessonType)
  lesson(
    @Args('id') id:string,
  ) {
    return this.lessonService.getLesson(id);
  }

  @Query(returns => [LessonType])
  lessons() {
    return this.lessonService.getLessons();
  }

  // @Mutation(returns => LessonType)
  // createLesson(
  //   @Args('name') name: string,
  //   @Args('startDate') startDate: string,
  //   @Args('endDate') endDate: string
  // ) {
  //   return this.lessonService.createLesson(name, startDate, endDate);
  // }

  @Mutation(returns => LessonType)
  createLesson(
    @Args('createLessonInput') createlessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createlessonInput);
  }
}