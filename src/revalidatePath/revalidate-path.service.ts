import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class RevalidatePathService {
  logger = new Logger('revalidatePath');

  async getRandom(): Promise<{ random: number }> {
    return {
      random: Math.floor(Math.random() * 45 + 1000),
    };
  }

  async revalidatePath() {
    const request = await fetch(
      `${process.env.NEXT_URL}/api/revalidate?path=/landing/revalidatePath`,
      {
        headers: {
          NEXT_SECRET_REVALIDATE_KEY: process.env.NEXT_SECRET_REVALIDATE_KEY,
        },
      },
    );
    const response = await request.json();
    return response;
  }
}
