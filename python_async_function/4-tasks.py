#!/usr/bin/env python3
"""Tasks"""
from typing import List
import asyncio
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Tasks"""
    delays: List[float] = []
    all_delays: List[float] = []
    for i in range(n):
        delays.append(task_wait_random(max_delay))
    for delay in asyncio.as_completed(delays):
        min_result = await delay
        all_delays.append(min_result)
    return all_delays
