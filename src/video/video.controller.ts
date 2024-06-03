// import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
// import { VideoService } from './video.service';
// import { Video } from './video.entity';
// import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

// @ApiTags('videos')
// @Controller('videos')
// export class VideoController {
//   constructor(private readonly videoService: VideoService) {}

//   @Get()
//   @ApiOperation({ summary: 'Get all videos' })
//   @ApiResponse({ status: 200, description: 'Return all videos.' })
//   findAll(): Promise<Video[]> {
//     return this.videoService.findAll();
//   }

//   @Get(':id')
//   @ApiOperation({ summary: 'Get video by ID' })
//   @ApiResponse({ status: 200, description: 'Return a video.' })
//   findOne(@Param('id') id: number): Promise<Video> {
//     return this.videoService.findOne(id);
//   }

//   @Post()
//   @ApiOperation({ summary: 'Create a video' })
//   @ApiResponse({ status: 201, description: 'The video has been successfully created.' })
//   create(@Body() video: Video): Promise<Video> {
//     return this.videoService.create(video);
//   }

//   @Delete(':id')
//   @ApiOperation({ summary: 'Delete a video' })
//   @ApiResponse({ status: 200, description: 'The video has been successfully deleted.' })
//   remove(@Param('id') id: number): Promise<void> {
//     return this.videoService.remove(id);
//   }
// }



import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { VideoService } from './video.service';
import { Video } from './video.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('videos')
@Controller('videos')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get()
  @ApiOperation({ summary: 'Get all videos' })
  @ApiResponse({ status: 200, description: 'Return all videos.' })
  findAll(): Promise<Video[]> {
    return this.videoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get video by ID' })
  @ApiResponse({ status: 200, description: 'Return a video.' })
  findOne(@Param('id') id: number): Promise<Video> {
    return this.videoService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a video' })
  @ApiResponse({ status: 201, description: 'The video has been successfully created.' })
  create(@Body() video: Video): Promise<Video> {
    return this.videoService.create(video);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a video' })
  @ApiResponse({ status: 200, description: 'The video has been successfully deleted.' })
  remove(@Param('id') id: number): Promise<void> {
    return this.videoService.remove(id);
  }

  @Patch(':id/selectedLayout')
  @ApiOperation({ summary: 'Select a layout for the video' })
  @ApiResponse({ status: 200, description: 'The layout has been successfully selected.' })
  updateSelectedLayout(@Param('id') id: number, @Body('selectedLayout') selectedLayout: string): Promise<Video> {
    return this.videoService.updateSelectedLayout(id, selectedLayout);
  }
}
