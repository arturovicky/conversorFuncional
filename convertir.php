<?php
    // Verificar si la solicitud es de tipo POST
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405); 
        echo json_encode(array('error' => 'Método no permitido'));
        exit;
    }

    
    header('Content-Type: application/json');

   
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    
    $tipo = isset($data['tipo']) ? $data['tipo'] : '';
    $valor = isset($data['valor']) ? $data['valor'] : '';

    // Procesar según el valor de 'tipo'
    switch ($tipo) {
        case 'c':
            $response = array(
                'f' => ($valor * (9/5)+32),  // Convertir de Celsius a Fahrenheit
                'k' => $valor + 273.15          // Convertir de Celsius a Kelvin
            );
            echo json_encode($response);
            break;
        case 'f':
            $response = array(
                'c' => (($valor -32) * (5/9)),  // Convertir de Celsius a Fahrenheit
                'k' => (($valor -32) * (5/9))+273.15          // Convertir de Celsius a Kelvin
            );
            echo json_encode($response);
            
            break;
        case 'k':
            $response = array(
                'c' => $valor -273.15,  // Convertir de Celsius a Fahrenheit
                'f' => (($valor -273.15)* 9/5+32)   // Convertir de Celsius a Kelvin
            );
            echo json_encode($response);
            
            break;
        default:
            
            echo json_encode(array('error' => 'Tipo no válido'));
            break;
    }
?>
