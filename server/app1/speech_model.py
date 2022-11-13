import ipywidgets as widgets
from IPython.display import display

record_button = widgets.Button(
    description='Record',
    disabled=False,
    button_style='success',
    tooltip='Record',
    icon='microphone'
)

stop_button = widgets.Button(
    description='Stop',
    disabled=False,
    button_style='warning',
    tooltip='Stop',
    icon='stop'
)

output = widgets.Output()

text = []
flag=0

def start_recording(data):
    while flag!=1:
        with output:
            t = recog()
            text.append(t)
            print(text[-1])

def stop_recording(data):
    with output:
        flag=1
        display("Stopped.")

record_button.on_click(start_recording)
stop_button.on_click(stop_recording)

display(record_button, stop_button, output)