import time
import json
import redis
import os

r = redis.Redis(host='redis', port=6379, decode_responses=True)

def process_image(image_path):
    print(f'Обрабатывается {image_path}')
    time.sleep(5)  # имитация работы
    return f'Processed {os.path.basename(image_path)}'

while True:
    _, task = r.blpop('tasks')
    data = json.loads(task)
    task_id = data['taskId']
    image_path = data['imagePath']

    r.hset(f'task:{task_id}', mapping={'status': 'processing'})
    result = process_image(image_path)
    r.hset(f'task:{task_id}', mapping={'status': 'done', 'result': result})
