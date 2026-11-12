from fastapi import FastAPI, Query
from starlette.responses import JSONResponse

app = FastAPI(title='signal-pilot-144', description='Reverse engineering agent API')

@app.get('/health')
def health():
    '''Health check endpoint.'''
    return JSONResponse({'status': 'ok'})

@app.get('/agent')
def agent():
    '''Agent stub for reverse engineering tasks.'''
    return JSONResponse({'message': 'Agent ready'})

@app.get('/reverse')
def reverse(text: str = Query("", description="Text to reverse")):
    '''Reverse the provided text.'''
    return JSONResponse({'reversed': text[::-1]})

if __name__ == '__main__':
    import uvicorn
    uvicorn.run('app:app', host='0.0.0.0', port=8000, reload=True)
