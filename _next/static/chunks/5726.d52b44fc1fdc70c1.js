"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[5726],{

/***/ 55726:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Player: () => (/* binding */ Player),
  PlayerInternals: () => (/* binding */ PlayerInternals),
  Thumbnail: () => (/* binding */ Thumbnail)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(12115);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95155);
// EXTERNAL MODULE: ./node_modules/remotion/dist/esm/index.mjs
var esm = __webpack_require__(24551);
;// ./node_modules/remotion/dist/esm/no-react.mjs
// src/normalize-number.ts
var normalizeNumber = (value)=>{
    return Math.round(value * 1e6) / 1e6;
};
// src/interpolate.ts
var angleUnits = new Set([
    "deg",
    "rad",
    "grad",
    "turn"
]);
var lengthUnits = new Set([
    "%",
    "cap",
    "ch",
    "cm",
    "cqb",
    "cqh",
    "cqi",
    "cqmax",
    "cqmin",
    "cqw",
    "dvh",
    "dvw",
    "em",
    "ex",
    "ic",
    "in",
    "lh",
    "lvh",
    "lvw",
    "mm",
    "pc",
    "pt",
    "px",
    "q",
    "rem",
    "rlh",
    "svh",
    "svw",
    "vb",
    "vh",
    "vi",
    "vmax",
    "vmin",
    "vw"
]);
var cssNumberRegex = /^([+-]?(?:\d+\.?\d*|\.\d+))([a-zA-Z%]+)?$/;
var transformOriginKeywords = new Set([
    "left",
    "center",
    "right",
    "top",
    "bottom"
]);
var transformOriginKeywordOptions = (keyword)=>{
    if (keyword === "left") {
        return [
            {
                axis: "x",
                value: {
                    value: 0,
                    unit: "%"
                }
            }
        ];
    }
    if (keyword === "right") {
        return [
            {
                axis: "x",
                value: {
                    value: 100,
                    unit: "%"
                }
            }
        ];
    }
    if (keyword === "top") {
        return [
            {
                axis: "y",
                value: {
                    value: 0,
                    unit: "%"
                }
            }
        ];
    }
    if (keyword === "bottom") {
        return [
            {
                axis: "y",
                value: {
                    value: 100,
                    unit: "%"
                }
            }
        ];
    }
    return [
        {
            axis: "x",
            value: {
                value: 50,
                unit: "%"
            }
        },
        {
            axis: "y",
            value: {
                value: 50,
                unit: "%"
            }
        }
    ];
};
var transformOriginCenter = {
    value: 50,
    unit: "%"
};
var stringifyNumber = (value)=>{
    return String(normalizeNumber(value));
};
var parseStringInterpolationComponent = (component, value)=>{
    const match = cssNumberRegex.exec(component);
    if (match === null) {
        throw new TypeError(`Cannot interpolate "${value}" because "${component}" is not a supported scale, translate, or rotate value`);
    }
    const unit = match[2] ?? null;
    const numberValue = Number(match[1]);
    if (!Number.isFinite(numberValue)) {
        throw new TypeError(`Cannot interpolate "${value}" because "${component}" is not finite`);
    }
    if (unit === null) {
        return {
            kind: "scale",
            value: numberValue,
            unit: null
        };
    }
    if (angleUnits.has(unit)) {
        return {
            kind: "rotate",
            value: numberValue,
            unit
        };
    }
    if (lengthUnits.has(unit)) {
        return {
            kind: "translate",
            value: numberValue,
            unit
        };
    }
    throw new TypeError(`Cannot interpolate "${value}" because "${unit}" is not a supported translate or rotate unit`);
};
var parseTransformOriginLengthPercentage = ({ component, value, allowPercentage })=>{
    const match = cssNumberRegex.exec(component);
    if (match === null) {
        throw new TypeError(`Cannot interpolate "${value}" because "${component}" is not a supported transform-origin ${allowPercentage ? "length-percentage" : "z length"}`);
    }
    const unit = match[2] ?? null;
    const numberValue = Number(match[1]);
    if (!Number.isFinite(numberValue)) {
        throw new TypeError(`Cannot interpolate "${value}" because "${component}" is not finite`);
    }
    if (unit === null || !lengthUnits.has(unit) || !allowPercentage && unit === "%") {
        throw new TypeError(`Cannot interpolate "${value}" because "${component}" is not a supported transform-origin ${allowPercentage ? "length-percentage" : "z length"}`);
    }
    return {
        value: numberValue,
        unit
    };
};
var parseTransformOriginToken = (component, value)=>{
    const lower = component.toLowerCase();
    if (transformOriginKeywords.has(lower)) {
        return {
            type: "keyword",
            keyword: lower
        };
    }
    return {
        type: "length-percentage",
        parsed: parseTransformOriginLengthPercentage({
            component,
            value,
            allowPercentage: true
        })
    };
};
var parseTwoTransformOriginKeywords = (first, second, value)=>{
    const candidates = [];
    for (const firstOption of transformOriginKeywordOptions(first)){
        for (const secondOption of transformOriginKeywordOptions(second)){
            if (firstOption.axis === secondOption.axis) {
                continue;
            }
            candidates.push(firstOption.axis === "x" ? [
                firstOption.value,
                secondOption.value
            ] : [
                secondOption.value,
                firstOption.value
            ]);
        }
    }
    if (candidates.length === 0) {
        throw new TypeError(`Cannot interpolate "${value}" because "${first} ${second}" is not a valid transform-origin keyword pair`);
    }
    return candidates[0];
};
var parseTransformOriginXY = (parts, value)=>{
    if (parts.length === 1) {
        const token = parseTransformOriginToken(parts[0], value);
        if (token.type === "length-percentage") {
            return [
                token.parsed,
                transformOriginCenter
            ];
        }
        if (token.keyword === "top" || token.keyword === "bottom") {
            return [
                transformOriginCenter,
                transformOriginKeywordOptions(token.keyword)[0].value
            ];
        }
        return [
            transformOriginKeywordOptions(token.keyword)[0].value,
            transformOriginCenter
        ];
    }
    const first = parseTransformOriginToken(parts[0], value);
    const second = parseTransformOriginToken(parts[1], value);
    if (first.type === "length-percentage" && second.type === "length-percentage") {
        return [
            first.parsed,
            second.parsed
        ];
    }
    if (first.type === "keyword" && second.type === "keyword") {
        return parseTwoTransformOriginKeywords(first.keyword, second.keyword, value);
    }
    const keyword = first.type === "keyword" ? first : second.type === "keyword" ? second : null;
    const length = first.type === "length-percentage" ? first.parsed : second.type === "length-percentage" ? second.parsed : null;
    if (keyword === null || length === null) {
        throw new Error("Expected a keyword and a length-percentage value");
    }
    const keywordIsFirst = first.type === "keyword";
    if (keyword.keyword === "left" || keyword.keyword === "right") {
        if (!keywordIsFirst) {
            throw new TypeError(`Cannot interpolate "${value}" because horizontal transform-origin keywords must come before a length-percentage value`);
        }
        return [
            transformOriginKeywordOptions(keyword.keyword)[0].value,
            length
        ];
    }
    if (keyword.keyword === "top" || keyword.keyword === "bottom") {
        return [
            length,
            transformOriginKeywordOptions(keyword.keyword)[0].value
        ];
    }
    return keywordIsFirst ? [
        transformOriginCenter,
        length
    ] : [
        length,
        transformOriginCenter
    ];
};
var parseTransformOriginValue = (output, parts)=>{
    const [x, y] = parseTransformOriginXY(parts.slice(0, 2), output);
    const z = parts[2] === undefined ? {
        value: 0,
        unit: null
    } : parseTransformOriginLengthPercentage({
        component: parts[2],
        value: output,
        allowPercentage: false
    });
    return {
        kind: "translate",
        values: [
            x.value,
            y.value,
            z.value
        ],
        units: [
            x.unit,
            y.unit,
            z.unit
        ],
        dimensions: parts[2] === undefined ? 2 : 3
    };
};
var parseStringInterpolationValue = (output)=>{
    if (typeof output === "number") {
        if (!Number.isFinite(output)) {
            throw new Error(`outputRange must contain only finite numbers, but got [${output}]`);
        }
        return {
            kind: "scale",
            values: [
                output,
                output,
                1
            ],
            units: [
                null,
                null,
                null
            ],
            dimensions: 1
        };
    }
    const parts = output.trim().split(/\s+/);
    if (parts.length < 1 || parts.length > 3 || parts[0] === "") {
        throw new TypeError(`String outputRange values must contain 1 to 3 components, but got "${output}"`);
    }
    if (parts.some((part)=>transformOriginKeywords.has(part.toLowerCase()))) {
        return parseTransformOriginValue(output, parts);
    }
    const parsed = parts.map((part)=>parseStringInterpolationComponent(part, output));
    const [{ kind }] = parsed;
    for (const part of parsed){
        if (part.kind !== kind) {
            throw new TypeError(`Cannot interpolate "${output}" because it mixes ${kind} and ${part.kind} values`);
        }
    }
    if (kind === "scale") {
        const x = parsed[0].value;
        const y = parsed[1]?.value ?? x;
        const z = parsed[2]?.value ?? 1;
        return {
            kind,
            values: [
                x,
                y,
                z
            ],
            units: [
                null,
                null,
                null
            ],
            dimensions: parsed.length
        };
    }
    return {
        kind,
        values: [
            parsed[0].value,
            parsed[1]?.value ?? 0,
            parsed[2]?.value ?? 0
        ],
        units: [
            parsed[0].unit,
            parsed[1]?.unit ?? null,
            parsed[2]?.unit ?? null
        ],
        dimensions: parsed.length
    };
};
var serializeStringInterpolationValue = ({ kind, values, units, dimensions })=>{
    if (kind === "scale") {
        return values.slice(0, dimensions).map((value)=>stringifyNumber(value)).join(" ");
    }
    return values.slice(0, dimensions).map((value, index)=>`${stringifyNumber(value)}${units[index]}`).join(" ");
};
function interpolateFunction(input, inputRange, outputRange, options) {
    const { extrapolateLeft, extrapolateRight, easing } = options;
    let result = input;
    const [inputMin, inputMax] = inputRange;
    const [outputMin, outputMax] = outputRange;
    if (result < inputMin) {
        if (extrapolateLeft === "identity") {
            return result;
        }
        if (extrapolateLeft === "clamp") {
            result = inputMin;
        } else if (extrapolateLeft === "wrap") {
            const range = inputMax - inputMin;
            result = ((result - inputMin) % range + range) % range + inputMin;
        } else if (extrapolateLeft === "extend") {}
    }
    if (result > inputMax) {
        if (extrapolateRight === "identity") {
            return result;
        }
        if (extrapolateRight === "clamp") {
            result = inputMax;
        } else if (extrapolateRight === "wrap") {
            const range = inputMax - inputMin;
            result = ((result - inputMin) % range + range) % range + inputMin;
        } else if (extrapolateRight === "extend") {}
    }
    if (outputMin === outputMax) {
        return outputMin;
    }
    result = (result - inputMin) / (inputMax - inputMin);
    result = easing(result);
    result = result * (outputMax - outputMin) + outputMin;
    return result;
}
function findRange(input, inputRange) {
    let i;
    for(i = 1; i < inputRange.length - 1; ++i){
        if (inputRange[i] >= input) {
            break;
        }
    }
    return i - 1;
}
var defaultEasing = (num)=>num;
var shouldExtendRightForEasing = (easing)=>{
    return easing.remotionShouldExtendRight === true;
};
var resolveEasingForSegment = ({ easing, segmentIndex })=>{
    if (easing === undefined) {
        return defaultEasing;
    }
    if (typeof easing === "function") {
        return easing;
    }
    return easing[segmentIndex];
};
var interpolateSegment = ({ input, inputRange, outputRange, easing, extrapolateLeft, extrapolateRight })=>{
    return interpolateFunction(input, inputRange, outputRange, {
        easing,
        extrapolateLeft,
        extrapolateRight: input > inputRange[1] && extrapolateRight === "clamp" && shouldExtendRightForEasing(easing) ? "extend" : extrapolateRight
    });
};
var interpolateNumber = ({ input, inputRange, outputRange, options })=>{
    if (inputRange.length === 1) {
        return outputRange[0];
    }
    const easingOption = options?.easing;
    let extrapolateLeft = "extend";
    if (options?.extrapolateLeft !== undefined) {
        extrapolateLeft = options.extrapolateLeft;
    }
    let extrapolateRight = "extend";
    if (options?.extrapolateRight !== undefined) {
        extrapolateRight = options.extrapolateRight;
    }
    const posterizedInput = options?.posterize === undefined ? input : Math.floor(input / options.posterize) * options.posterize;
    const range = findRange(posterizedInput, inputRange);
    const easing = resolveEasingForSegment({
        easing: easingOption,
        segmentIndex: range
    });
    let result = interpolateSegment({
        input: posterizedInput,
        inputRange: [
            inputRange[range],
            inputRange[range + 1]
        ],
        outputRange: [
            outputRange[range],
            outputRange[range + 1]
        ],
        easing,
        extrapolateLeft,
        extrapolateRight
    });
    for(let segmentIndex = 0; segmentIndex < range; segmentIndex++){
        const previousEasing = resolveEasingForSegment({
            easing: easingOption,
            segmentIndex
        });
        if (!shouldExtendRightForEasing(previousEasing)) {
            continue;
        }
        const previousSegmentEnd = inputRange[segmentIndex + 1];
        if (posterizedInput <= previousSegmentEnd) {
            continue;
        }
        const continuedSegmentValue = interpolateSegment({
            input: posterizedInput,
            inputRange: [
                inputRange[segmentIndex],
                previousSegmentEnd
            ],
            outputRange: [
                outputRange[segmentIndex],
                outputRange[segmentIndex + 1]
            ],
            easing: previousEasing,
            extrapolateLeft,
            extrapolateRight: "extend"
        });
        result += continuedSegmentValue - outputRange[segmentIndex + 1];
    }
    return result;
};
var interpolateString = ({ input, inputRange, outputRange, options })=>{
    const parsedOutputRange = outputRange.map(parseStringInterpolationValue);
    const kind = parsedOutputRange[0]?.kind;
    if (kind === undefined) {
        throw new Error("outputRange must have at least 1 element");
    }
    for (const parsed of parsedOutputRange){
        if (parsed.kind !== kind) {
            throw new TypeError(`Cannot interpolate ${kind} values with ${parsed.kind} values`);
        }
    }
    const dimensions = Math.max(...parsedOutputRange.map((parsed)=>parsed.dimensions));
    const units = [
        null,
        null,
        null
    ];
    if (kind !== "scale") {
        for(let axis = 0; axis < dimensions; axis++){
            for (const parsed of parsedOutputRange){
                const unit = parsed.units[axis];
                if (unit === null) {
                    continue;
                }
                if (units[axis] === null) {
                    units[axis] = unit;
                    continue;
                }
                if (units[axis] !== unit) {
                    throw new TypeError(`Cannot interpolate ${kind} values with different units on axis ${axis + 1}: ${units[axis]} and ${unit}`);
                }
            }
            if (units[axis] === null) {
                throw new TypeError(`Cannot interpolate ${kind} values because axis ${axis + 1} has no unit`);
            }
        }
    }
    return serializeStringInterpolationValue({
        kind,
        values: [
            0,
            0,
            0
        ].map((_, axis)=>interpolateNumber({
                input,
                inputRange,
                outputRange: parsedOutputRange.map((parsed)=>parsed.values[axis]),
                options
            })),
        units,
        dimensions
    });
};
var validateTupleOutputRange = (outputRange)=>{
    const dimensions = outputRange[0]?.length;
    if (dimensions === undefined) {
        throw new Error("outputRange must have at least 1 element");
    }
    if (dimensions === 0) {
        throw new TypeError("outputRange tuples must contain at least 1 number");
    }
    for (const output of outputRange){
        if (output.length !== dimensions) {
            throw new TypeError(`outputRange tuples must all have the same length, but got ${dimensions} and ${output.length}`);
        }
        for (const value of output){
            if (typeof value !== "number" || !Number.isFinite(value)) {
                throw new TypeError(`outputRange tuples must contain only finite numbers, but got [${output.join(",")}]`);
            }
        }
    }
    return dimensions;
};
var interpolateTuple = ({ input, inputRange, outputRange, options })=>{
    const dimensions = validateTupleOutputRange(outputRange);
    return new Array(dimensions).fill(true).map((_, axis)=>interpolateNumber({
            input,
            inputRange,
            outputRange: outputRange.map((output)=>output[axis]),
            options
        }));
};
function checkValidInputRange(arr) {
    for(let i = 1; i < arr.length; ++i){
        if (!(arr[i] > arr[i - 1])) {
            throw new Error(`inputRange must be strictly monotonically increasing but got [${arr.join(",")}]`);
        }
    }
}
function checkInfiniteRange(name, arr) {
    if (arr.length < 1) {
        throw new Error(name + " must have at least 1 element");
    }
    for (const element of arr){
        if (typeof element !== "number") {
            throw new Error(`${name} must contain only numbers`);
        }
        if (!Number.isFinite(element)) {
            throw new Error(`${name} must contain only finite numbers, but got [${arr.join(",")}]`);
        }
    }
}
function assertValidInterpolateEasingOption(easing, inputRangeLength) {
    if (easing === undefined) {
        return;
    }
    if (typeof easing === "function") {
        return;
    }
    const expectedLength = inputRangeLength - 1;
    if (easing.length !== expectedLength) {
        throw new Error(`When easing is an array, it must have one entry per segment between keyframes (length inputRange.length - 1 = ${expectedLength}), but got length ${easing.length}`);
    }
    for(let i = 0; i < easing.length; i++){
        if (typeof easing[i] !== "function") {
            throw new Error(`easing[${i}] must be a function`);
        }
    }
}
function assertValidInterpolatePosterizeOption(posterize) {
    if (posterize === undefined) {
        return;
    }
    if (typeof posterize !== "number" || !Number.isFinite(posterize) || posterize <= 0) {
        throw new Error(`posterize must be a positive finite number, but got ${posterize}`);
    }
}
function interpolate(input, inputRange, outputRange, options) {
    if (typeof input === "undefined") {
        throw new Error("input can not be undefined");
    }
    if (typeof inputRange === "undefined") {
        throw new Error("inputRange can not be undefined");
    }
    if (typeof outputRange === "undefined") {
        throw new Error("outputRange can not be undefined");
    }
    if (inputRange.length !== outputRange.length) {
        throw new Error("inputRange (" + inputRange.length + ") and outputRange (" + outputRange.length + ") must have the same length");
    }
    checkInfiniteRange("inputRange", inputRange);
    checkValidInputRange(inputRange);
    assertValidInterpolateEasingOption(options?.easing, inputRange.length);
    assertValidInterpolatePosterizeOption(options?.posterize);
    if (typeof input !== "number") {
        throw new TypeError("Cannot interpolate an input which is not a number");
    }
    if (!Array.isArray(outputRange)) {
        throw new Error("outputRange must contain only numbers");
    }
    const hasStringOutput = outputRange.some((output)=>typeof output === "string");
    if (hasStringOutput) {
        if (!outputRange.every((output)=>typeof output === "string" || typeof output === "number")) {
            throw new TypeError("outputRange must contain only numbers, or supported scale, translate, and rotate strings");
        }
        return interpolateString({
            input,
            inputRange,
            outputRange,
            options
        });
    }
    if (outputRange.every((output)=>Array.isArray(output))) {
        return interpolateTuple({
            input,
            inputRange,
            outputRange,
            options
        });
    }
    if (!outputRange.every((output)=>typeof output === "number")) {
        throw new TypeError("outputRange must contain only numbers, numeric tuples, or supported scale, translate, and rotate strings");
    }
    checkInfiniteRange("outputRange", outputRange);
    return interpolateNumber({
        input,
        inputRange,
        outputRange,
        options
    });
}
// src/random.ts
function mulberry32(a) {
    let t = a + 1831565813;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function hashCode(str) {
    let i = 0;
    let chr = 0;
    let hash = 0;
    for(i = 0; i < str.length; i++){
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return hash;
}
var random = (seed, dummy)=>{
    if (dummy !== undefined) {
        throw new TypeError("random() takes only one argument");
    }
    if (seed === null) {
        return Math.random();
    }
    if (typeof seed === "string") {
        return mulberry32(hashCode(seed));
    }
    if (typeof seed === "number") {
        return mulberry32(seed * 10000000000);
    }
    throw new Error("random() argument must be a number or a string");
};
// src/truthy.ts
function truthy(value) {
    return Boolean(value);
}
// src/delay-render.ts
if (typeof window !== "undefined") {
    window.remotion_renderReady = false;
    if (!window.remotion_delayRenderTimeouts) {
        window.remotion_delayRenderTimeouts = {};
    }
    window.remotion_delayRenderHandles = [];
}
var DELAY_RENDER_CALLSTACK_TOKEN = "The delayRender was called:";
var DELAY_RENDER_RETRIES_LEFT = "Retries left: ";
var DELAY_RENDER_RETRY_TOKEN = "- Rendering the frame will be retried.";
var DELAY_RENDER_CLEAR_TOKEN = "handle was cleared after";
// src/find-props-to-delete.ts
var findPropsToDelete = ({ schema, key, value })=>{
    const fieldSchema = schema[key];
    if (!fieldSchema) {
        throw new Error("Key " + JSON.stringify(key) + " not found in schema");
    }
    if (typeof value !== "string") {
        throw new Error("Value must be a string, but is " + JSON.stringify(value));
    }
    if (fieldSchema.type !== "enum") {
        throw new Error("Key " + JSON.stringify(key) + " is not an enum");
    }
    const currentVariant = fieldSchema.variants[value];
    if (!currentVariant) {
        throw new Error("Value for " + JSON.stringify(key) + " must be one of " + Object.keys(fieldSchema.variants).map((v)=>JSON.stringify(v)).join(", ") + ", got " + JSON.stringify(value));
    }
    const otherVariants = Object.keys(fieldSchema.variants).filter((v)=>v !== value);
    const otherKeys = new Set;
    for (const variant of otherVariants){
        const otherVariant = fieldSchema.variants[variant];
        const keys = Object.keys(otherVariant);
        for (const k of keys){
            otherKeys.add(k);
        }
    }
    return [
        ...otherKeys
    ];
};
// src/input-props-serialization.ts
var DATE_TOKEN = "remotion-date:";
var FILE_TOKEN = "remotion-file:";
var serializeJSONWithSpecialTypes = ({ data, indent, staticBase })=>{
    let customDateUsed = false;
    let customFileUsed = false;
    let mapUsed = false;
    let setUsed = false;
    try {
        const serializedString = JSON.stringify(data, function(key, value) {
            const item = this[key];
            if (item instanceof Date) {
                customDateUsed = true;
                return `${DATE_TOKEN}${item.toISOString()}`;
            }
            if (item instanceof Map) {
                mapUsed = true;
                return value;
            }
            if (item instanceof Set) {
                setUsed = true;
                return value;
            }
            if (typeof item === "string" && staticBase !== null && item.startsWith(staticBase)) {
                customFileUsed = true;
                return `${FILE_TOKEN}${item.replace(staticBase + "/", "")}`;
            }
            return value;
        }, indent);
        return {
            serializedString,
            customDateUsed,
            customFileUsed,
            mapUsed,
            setUsed
        };
    } catch (err) {
        throw new Error("Could not serialize the passed input props to JSON: " + err.message);
    }
};
var deserializeJSONWithSpecialTypes = (data)=>{
    return JSON.parse(data, (_, value)=>{
        if (typeof value === "string" && value.startsWith(DATE_TOKEN)) {
            return new Date(value.replace(DATE_TOKEN, ""));
        }
        if (typeof value === "string" && value.startsWith(FILE_TOKEN)) {
            return `${window.remotion_staticBase}/${value.replace(FILE_TOKEN, "")}`;
        }
        return value;
    });
};
// src/interactivity-schema.ts
var transformSchema = {
    "style.transformOrigin": {
        type: "transform-origin",
        step: 1,
        default: "50% 50%",
        description: "Transform origin"
    },
    "style.translate": {
        type: "translate",
        step: 1,
        default: "0px 0px",
        description: "Offset"
    },
    "style.scale": {
        type: "scale",
        max: 100,
        step: 0.01,
        default: 1,
        description: "Scale"
    },
    "style.rotate": {
        type: "rotation-css",
        step: 1,
        default: "0deg",
        description: "Rotation"
    },
    "style.opacity": {
        type: "number",
        min: 0,
        max: 1,
        step: 0.01,
        default: 1,
        description: "Opacity",
        hiddenFromList: false
    }
};
var premountSchema = {
    premountFor: {
        type: "number",
        default: 0,
        description: "Premount For",
        min: 0,
        step: 1,
        hiddenFromList: false
    },
    postmountFor: {
        type: "number",
        default: 0,
        min: 0,
        step: 1,
        hiddenFromList: true
    },
    styleWhilePremounted: {
        type: "hidden"
    },
    styleWhilePostmounted: {
        type: "hidden"
    }
};
var sequenceStyleSchema = {
    ...transformSchema,
    ...premountSchema
};
var hiddenField = {
    type: "boolean",
    default: false,
    description: "Hidden"
};
var showInTimelineField = {
    type: "hidden"
};
var sequenceNameField = {
    type: "hidden"
};
var durationInFramesField = {
    type: "number",
    default: undefined,
    min: 1,
    step: 1,
    hiddenFromList: true
};
var fromField = {
    type: "number",
    default: 0,
    step: 1,
    hiddenFromList: true
};
var trimBeforeField = {
    type: "number",
    default: 0,
    min: 0,
    step: 1,
    hiddenFromList: true
};
var freezeField = {
    type: "number",
    default: null,
    step: 1,
    hiddenFromList: true
};
var baseSchema = {
    durationInFrames: durationInFramesField,
    from: fromField,
    trimBefore: trimBeforeField,
    freeze: freezeField,
    hidden: hiddenField,
    name: sequenceNameField,
    showInTimeline: showInTimelineField
};
var sequenceSchema = {
    ...baseSchema,
    layout: {
        type: "enum",
        default: "absolute-fill",
        description: "Layout",
        variants: {
            "absolute-fill": sequenceStyleSchema,
            none: {}
        }
    }
};
var baseSchemaWithoutFrom = {
    durationInFrames: durationInFramesField,
    trimBefore: trimBeforeField,
    freeze: freezeField,
    hidden: hiddenField,
    name: sequenceNameField,
    showInTimeline: showInTimelineField
};
var sequenceSchemaWithoutFrom = {
    ...baseSchemaWithoutFrom,
    layout: sequenceSchema.layout
};
var sequenceSchemaDefaultLayoutNone = {
    ...sequenceSchema,
    layout: {
        ...sequenceSchema.layout,
        default: "none"
    }
};
// src/interpolate-colors.ts
var NUMBER = "[-+]?\\d*\\.?\\d+";
var PERCENTAGE = NUMBER + "%";
function call(...args) {
    return "\\(\\s*(" + args.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var MODERN_VALUE = "(?:none|[-+]?\\d*\\.?\\d+(?:%|deg|rad|grad|turn)?)";
function modernColorCall(name) {
    return new RegExp(name + "\\(\\s*(" + MODERN_VALUE + ")\\s+(" + MODERN_VALUE + ")\\s+(" + MODERN_VALUE + ")(?:\\s*\\/\\s*(" + MODERN_VALUE + "))?\\s*\\)");
}
function getMatchers() {
    const cachedMatchers = {
        rgb: undefined,
        rgba: undefined,
        hsl: undefined,
        hsla: undefined,
        hex3: undefined,
        hex4: undefined,
        hex5: undefined,
        hex6: undefined,
        hex8: undefined,
        oklch: undefined,
        oklab: undefined,
        lab: undefined,
        lch: undefined,
        hwb: undefined
    };
    if (cachedMatchers.rgb === undefined) {
        cachedMatchers.rgb = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
        cachedMatchers.rgba = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
        cachedMatchers.hsl = new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE));
        cachedMatchers.hsla = new RegExp("hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
        cachedMatchers.hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
        cachedMatchers.hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
        cachedMatchers.hex6 = /^#([0-9a-fA-F]{6})$/;
        cachedMatchers.hex8 = /^#([0-9a-fA-F]{8})$/;
        cachedMatchers.oklch = modernColorCall("oklch");
        cachedMatchers.oklab = modernColorCall("oklab");
        cachedMatchers.lab = modernColorCall("lab");
        cachedMatchers.lch = modernColorCall("lch");
        cachedMatchers.hwb = modernColorCall("hwb");
    }
    return cachedMatchers;
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
function hslToRgb(h, s, l) {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const r = hue2rgb(p, q, h + 1 / 3);
    const g = hue2rgb(p, q, h);
    const b = hue2rgb(p, q, h - 1 / 3);
    return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}
function parse255(str) {
    const int = Number.parseInt(str, 10);
    if (int < 0) {
        return 0;
    }
    if (int > 255) {
        return 255;
    }
    return int;
}
function parse360(str) {
    const int = Number.parseFloat(str);
    return (int % 360 + 360) % 360 / 360;
}
function parse1(str) {
    const num = Number.parseFloat(str);
    if (num < 0) {
        return 0;
    }
    if (num > 1) {
        return 255;
    }
    return Math.round(num * 255);
}
function parsePercentage(str) {
    const int = Number.parseFloat(str);
    if (int < 0) {
        return 0;
    }
    if (int > 100) {
        return 1;
    }
    return int / 100;
}
function parseModernComponent(str, percentScale) {
    if (str === "none") return 0;
    if (str.endsWith("%")) {
        return Number.parseFloat(str) / 100 * percentScale;
    }
    return Number.parseFloat(str);
}
function parseHueAngle(str) {
    if (str === "none") return 0;
    if (str.endsWith("rad")) {
        return Number.parseFloat(str) * 180 / Math.PI;
    }
    if (str.endsWith("grad")) return Number.parseFloat(str) * 0.9;
    if (str.endsWith("turn")) return Number.parseFloat(str) * 360;
    return Number.parseFloat(str);
}
function parseModernAlpha(str) {
    if (str === undefined || str === "none") return 1;
    if (str.endsWith("%")) {
        return Math.max(0, Math.min(1, Number.parseFloat(str) / 100));
    }
    return Math.max(0, Math.min(1, Number.parseFloat(str)));
}
function linearToSrgb(c) {
    if (c <= 0.0031308) return 12.92 * c;
    return 1.055 * c ** (1 / 2.4) - 0.055;
}
function clamp01(v) {
    return Math.max(0, Math.min(1, v));
}
function rgbFloatToInt(r, g, b, alpha) {
    const ri = Math.round(clamp01(r) * 255);
    const gi = Math.round(clamp01(g) * 255);
    const bi = Math.round(clamp01(b) * 255);
    const ai = Math.round(clamp01(alpha) * 255);
    return (ri << 24 | gi << 16 | bi << 8 | ai) >>> 0;
}
function oklabToSrgb(L, a, b) {
    const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
    const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
    const s_ = L - 0.0894841775 * a - 1.291485548 * b;
    const l = l_ * l_ * l_;
    const m = m_ * m_ * m_;
    const s = s_ * s_ * s_;
    const rLin = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
    const gLin = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
    const bLin = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;
    return [
        linearToSrgb(rLin),
        linearToSrgb(gLin),
        linearToSrgb(bLin)
    ];
}
function labToSrgb(L, a, b) {
    const epsilon = 216 / 24389;
    const kappa = 24389 / 27;
    const Xn = 0.95047;
    const Yn = 1;
    const Zn = 1.08883;
    const fy = (L + 16) / 116;
    const fx = a / 500 + fy;
    const fz = fy - b / 200;
    const fx3 = fx * fx * fx;
    const fz3 = fz * fz * fz;
    const xr = fx3 > epsilon ? fx3 : (116 * fx - 16) / kappa;
    const yr = L > kappa * epsilon ? ((L + 16) / 116) ** 3 : L / kappa;
    const zr = fz3 > epsilon ? fz3 : (116 * fz - 16) / kappa;
    const X = xr * Xn;
    const Y = yr * Yn;
    const Z = zr * Zn;
    const rLin = 3.2404542 * X - 1.5371385 * Y - 0.4985314 * Z;
    const gLin = -0.969266 * X + 1.8760108 * Y + 0.041556 * Z;
    const bLin = 0.0556434 * X - 0.2040259 * Y + 1.0572252 * Z;
    return [
        linearToSrgb(rLin),
        linearToSrgb(gLin),
        linearToSrgb(bLin)
    ];
}
function hwbToSrgb(h, w, bk) {
    if (w + bk >= 1) {
        const gray = w / (w + bk);
        return [
            gray,
            gray,
            gray
        ];
    }
    const q = 1;
    const p = 0;
    const r = hue2rgb(p, q, h + 1 / 3);
    const g = hue2rgb(p, q, h);
    const bl = hue2rgb(p, q, h - 1 / 3);
    const factor = 1 - w - bk;
    return [
        r * factor + w,
        g * factor + w,
        bl * factor + w
    ];
}
var colorNames = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199
};
function normalizeColor(color) {
    const matchers = getMatchers();
    let match;
    if (matchers.hex6) {
        if (match = matchers.hex6.exec(color)) {
            return Number.parseInt(match[1] + "ff", 16) >>> 0;
        }
    }
    if (colorNames[color] !== undefined) {
        return colorNames[color];
    }
    if (matchers.rgb) {
        if (match = matchers.rgb.exec(color)) {
            return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 255) >>> 0;
        }
    }
    if (matchers.rgba) {
        if (match = matchers.rgba.exec(color)) {
            return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | parse1(match[4])) >>> 0;
        }
    }
    if (matchers.hex3) {
        if (match = matchers.hex3.exec(color)) {
            return Number.parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + "ff", 16) >>> 0;
        }
    }
    if (matchers.hex8) {
        if (match = matchers.hex8.exec(color)) {
            return Number.parseInt(match[1], 16) >>> 0;
        }
    }
    if (matchers.hex4) {
        if (match = matchers.hex4.exec(color)) {
            return Number.parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
        }
    }
    if (matchers.hsl) {
        if (match = matchers.hsl.exec(color)) {
            return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 255) >>> 0;
        }
    }
    if (matchers.hsla) {
        if (match = matchers.hsla.exec(color)) {
            return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0;
        }
    }
    if (matchers.oklch) {
        if (match = matchers.oklch.exec(color)) {
            const L = parseModernComponent(match[1], 1);
            const C = parseModernComponent(match[2], 0.4);
            const H = parseHueAngle(match[3]);
            const alpha = parseModernAlpha(match[4]);
            const hRad = H * Math.PI / 180;
            const [r, g, b] = oklabToSrgb(L, C * Math.cos(hRad), C * Math.sin(hRad));
            return rgbFloatToInt(r, g, b, alpha);
        }
    }
    if (matchers.oklab) {
        if (match = matchers.oklab.exec(color)) {
            const L = parseModernComponent(match[1], 1);
            const a = parseModernComponent(match[2], 0.4);
            const b = parseModernComponent(match[3], 0.4);
            const alpha = parseModernAlpha(match[4]);
            const [r, g, bl] = oklabToSrgb(L, a, b);
            return rgbFloatToInt(r, g, bl, alpha);
        }
    }
    if (matchers.lab) {
        if (match = matchers.lab.exec(color)) {
            const L = parseModernComponent(match[1], 100);
            const a = parseModernComponent(match[2], 125);
            const b = parseModernComponent(match[3], 125);
            const alpha = parseModernAlpha(match[4]);
            const [r, g, bl] = labToSrgb(L, a, b);
            return rgbFloatToInt(r, g, bl, alpha);
        }
    }
    if (matchers.lch) {
        if (match = matchers.lch.exec(color)) {
            const L = parseModernComponent(match[1], 100);
            const C = parseModernComponent(match[2], 150);
            const H = parseHueAngle(match[3]);
            const alpha = parseModernAlpha(match[4]);
            const hRad = H * Math.PI / 180;
            const [r, g, bl] = labToSrgb(L, C * Math.cos(hRad), C * Math.sin(hRad));
            return rgbFloatToInt(r, g, bl, alpha);
        }
    }
    if (matchers.hwb) {
        if (match = matchers.hwb.exec(color)) {
            const H = parseHueAngle(match[1]);
            const W = parseModernComponent(match[2], 1);
            const B = parseModernComponent(match[3], 1);
            const alpha = parseModernAlpha(match[4]);
            const [r, g, bl] = hwbToSrgb(H / 360, W, B);
            return rgbFloatToInt(r, g, bl, alpha);
        }
    }
    throw new Error(`invalid color string ${color} provided`);
}
function processColor(color) {
    const normalizedColor = normalizeColor(color);
    return (normalizedColor << 24 | normalizedColor >>> 8) >>> 0;
}
// src/prores-profile.ts
var proResProfileOptions = [
    "4444-xq",
    "4444",
    "hq",
    "standard",
    "light",
    "proxy"
];
// src/scale-value.ts
var defaultScaleValue = [
    1,
    1,
    1
];
var parseScaleString = (value)=>{
    const parts = value.trim().split(/\s+/);
    if (parts.length < 1 || parts.length > 3 || parts[0] === "") {
        return null;
    }
    const parsed = parts.map((part)=>Number(part));
    if (!parsed.every((part)=>Number.isFinite(part))) {
        return null;
    }
    const x = parsed[0];
    const y = parsed[1] ?? x;
    const z = parsed[2] ?? 1;
    return [
        x,
        y,
        z
    ];
};
var parseValidScaleValue = (value)=>{
    if (typeof value === "number") {
        return Number.isFinite(value) ? [
            value,
            value,
            1
        ] : null;
    }
    if (typeof value === "string") {
        return parseScaleString(value);
    }
    return null;
};
var parseScaleValue = (value)=>{
    return parseValidScaleValue(value) ?? defaultScaleValue;
};
var serializeScaleValue = ([x, y, z])=>{
    const normalizedX = normalizeNumber(x);
    const normalizedY = normalizeNumber(y);
    const normalizedZ = normalizeNumber(z);
    if (normalizedX === normalizedY && normalizedZ === 1) {
        return normalizedX;
    }
    if (normalizedZ === 1) {
        return `${normalizedX} ${normalizedY}`;
    }
    return `${normalizedX} ${normalizedY} ${normalizedZ}`;
};
// src/v5-flag.ts
var ENABLE_V5_BREAKING_CHANGES = false;
// src/validate-frame.ts
var validateFrame = ({ allowFloats, durationInFrames, frame })=>{
    if (typeof frame === "undefined") {
        throw new TypeError(`Argument missing for parameter "frame"`);
    }
    if (typeof frame !== "number") {
        throw new TypeError(`Argument passed for "frame" is not a number: ${frame}`);
    }
    if (!Number.isFinite(frame)) {
        throw new RangeError(`Frame ${frame} is not finite`);
    }
    if (frame % 1 !== 0 && !allowFloats) {
        throw new RangeError(`Argument for frame must be an integer, but got ${frame}`);
    }
    if (frame < 0 && frame < -durationInFrames) {
        throw new RangeError(`Cannot use frame ${frame}: Duration of composition is ${durationInFrames}, therefore the lowest frame that can be rendered is ${-durationInFrames}`);
    }
    if (frame > durationInFrames - 1) {
        throw new RangeError(`Cannot use frame ${frame}: Duration of composition is ${durationInFrames}, therefore the highest frame that can be rendered is ${durationInFrames - 1}`);
    }
};
// src/codec.ts
var validCodecs = [
    "h264",
    "h265",
    "vp8",
    "vp9",
    "av1",
    "mp3",
    "aac",
    "wav",
    "prores",
    "h264-mkv",
    "h264-ts",
    "gif"
];
// src/validation/validate-default-codec.ts
function validateCodec(defaultCodec, location, name) {
    if (typeof defaultCodec === "undefined") {
        return;
    }
    if (typeof defaultCodec !== "string") {
        throw new TypeError(`The "${name}" prop ${location} must be a string, but you passed a value of type ${typeof defaultCodec}.`);
    }
    if (!validCodecs.includes(defaultCodec)) {
        throw new Error(`The "${name}" prop ${location} must be one of ${validCodecs.join(", ")}, but you passed ${defaultCodec}.`);
    }
}
// src/validation/validate-default-props.ts
var validateDefaultAndInputProps = (defaultProps, name, compositionId)=>{
    if (!defaultProps) {
        return;
    }
    if (typeof defaultProps !== "object") {
        throw new Error(`"${name}" must be an object, but you passed a value of type ${typeof defaultProps}`);
    }
    if (Array.isArray(defaultProps)) {
        throw new Error(`"${name}" must be an object, an array was passed ${compositionId ? `for composition "${compositionId}"` : ""}`);
    }
};
// src/validation/validate-dimensions.ts
function validateDimension(amount, nameOfProp, location) {
    if (typeof amount !== "number") {
        throw new Error(`The "${nameOfProp}" prop ${location} must be a number, but you passed a value of type ${typeof amount}`);
    }
    if (isNaN(amount)) {
        throw new TypeError(`The "${nameOfProp}" prop ${location} must not be NaN, but is NaN.`);
    }
    if (!Number.isFinite(amount)) {
        throw new TypeError(`The "${nameOfProp}" prop ${location} must be finite, but is ${amount}.`);
    }
    if (amount % 1 !== 0) {
        throw new TypeError(`The "${nameOfProp}" prop ${location} must be an integer, but is ${amount}.`);
    }
    if (amount <= 0) {
        throw new TypeError(`The "${nameOfProp}" prop ${location} must be positive, but got ${amount}.`);
    }
}
// src/validation/validate-duration-in-frames.ts
function validateDurationInFrames(durationInFrames, options) {
    const { allowFloats, component } = options;
    if (typeof durationInFrames === "undefined") {
        throw new Error(`The "durationInFrames" prop ${component} is missing.`);
    }
    if (typeof durationInFrames !== "number") {
        throw new Error(`The "durationInFrames" prop ${component} must be a number, but you passed a value of type ${typeof durationInFrames}`);
    }
    if (durationInFrames <= 0) {
        throw new TypeError(`The "durationInFrames" prop ${component} must be positive, but got ${durationInFrames}.`);
    }
    if (!allowFloats && durationInFrames % 1 !== 0) {
        throw new TypeError(`The "durationInFrames" prop ${component} must be an integer, but got ${durationInFrames}.`);
    }
    if (!Number.isFinite(durationInFrames)) {
        throw new TypeError(`The "durationInFrames" prop ${component} must be finite, but got ${durationInFrames}.`);
    }
}
// src/validation/validate-fps.ts
function validateFps(fps, location, isGif) {
    if (typeof fps !== "number") {
        throw new Error(`"fps" must be a number, but you passed a value of type ${typeof fps} ${location}`);
    }
    if (!Number.isFinite(fps)) {
        throw new Error(`"fps" must be a finite, but you passed ${fps} ${location}`);
    }
    if (isNaN(fps)) {
        throw new Error(`"fps" must not be NaN, but got ${fps} ${location}`);
    }
    if (fps <= 0) {
        throw new TypeError(`"fps" must be positive, but got ${fps} ${location}`);
    }
    if (isGif && fps > 50) {
        throw new TypeError(`The FPS for a GIF cannot be higher than 50. Use the --every-nth-frame option to lower the FPS: https://remotion.dev/docs/render-as-gif`);
    }
}
// src/video/get-current-time.ts
var getExpectedMediaFrameUncorrected = ({ frame, playbackRate, startFrom })=>{
    return interpolate(frame, [
        -1,
        startFrom,
        startFrom + 1
    ], [
        -1,
        startFrom,
        startFrom + playbackRate
    ]);
};
// src/absolute-src.ts
var getAbsoluteSrc = (relativeSrc)=>{
    if (typeof window === "undefined") {
        return relativeSrc;
    }
    if (relativeSrc.startsWith("http://") || relativeSrc.startsWith("https://") || relativeSrc.startsWith("file://") || relativeSrc.startsWith("blob:") || relativeSrc.startsWith("data:")) {
        return relativeSrc;
    }
    return new URL(relativeSrc, window.origin).href;
};
// src/video/offthread-video-source.ts
var getOffthreadVideoSource = ({ src, transparent, currentTime, toneMapped })=>{
    return `http://localhost:${window.remotion_proxyPort}/proxy?src=${encodeURIComponent(getAbsoluteSrc(src))}&time=${encodeURIComponent(Math.max(0, currentTime))}&transparent=${String(transparent)}&toneMapped=${String(toneMapped)}`;
};
// src/no-react.ts
var NoReactInternals = {
    processColor,
    truthy,
    validateFps,
    validateDimension,
    validateDurationInFrames,
    validateDefaultAndInputProps,
    validateFrame,
    serializeJSONWithSpecialTypes,
    bundleName: "bundle.js",
    bundleMapName: "bundle.js.map",
    deserializeJSONWithSpecialTypes,
    DELAY_RENDER_CALLSTACK_TOKEN,
    DELAY_RENDER_RETRY_TOKEN,
    DELAY_RENDER_CLEAR_TOKEN,
    DELAY_RENDER_ATTEMPT_TOKEN: DELAY_RENDER_RETRIES_LEFT,
    getOffthreadVideoSource,
    getExpectedMediaFrameUncorrected,
    ENABLE_V5_BREAKING_CHANGES,
    MIN_NODE_VERSION: ENABLE_V5_BREAKING_CHANGES ? 18 : 16,
    MIN_BUN_VERSION: ENABLE_V5_BREAKING_CHANGES ? "1.1.3" : "1.0.3",
    colorNames,
    DATE_TOKEN,
    FILE_TOKEN,
    validateCodec,
    proResProfileOptions,
    findPropsToDelete,
    sequenceSchema,
    parseScaleValue,
    serializeScaleValue
};


;// ./node_modules/@remotion/player/dist/esm/index.mjs
/* __next_internal_client_entry_do_not_use__ Thumbnail,PlayerInternals,Player auto */ // src/_check-rsc.ts

if (typeof react.createContext !== "function") {
    const err = [
        'Remotion requires React.createContext, but it is "undefined".',
        'If you are in a React Server Component, turn it into a client component by adding "use client" at the top of the file.',
        "",
        "Before:",
        '  import {Player} from "@remotion/player";',
        "",
        "After:",
        '  "use client";',
        '  import {Player} from "@remotion/player";'
    ];
    throw new Error(err.join(`
`));
}
// src/icons.tsx

var ICON_SIZE = 25;
var fullscreenIconSize = 16;
var PlayIcon = ()=>{
    return /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", {
        width: ICON_SIZE,
        height: ICON_SIZE,
        viewBox: "0 0 25 25",
        fill: "none",
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)("path", {
            d: "M8 6.375C7.40904 8.17576 7.06921 10.2486 7.01438 12.3871C6.95955 14.5255 7.19163 16.6547 7.6875 18.5625C9.95364 18.2995 12.116 17.6164 14.009 16.5655C15.902 15.5147 17.4755 14.124 18.6088 12.5C17.5158 10.8949 15.9949 9.51103 14.1585 8.45082C12.3222 7.3906 10.2174 6.68116 8 6.375Z",
            fill: "white",
            stroke: "white",
            strokeWidth: "6.25",
            strokeLinejoin: "round"
        })
    });
};
var PauseIcon = ()=>{
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)("svg", {
        viewBox: "0 0 100 100",
        width: ICON_SIZE,
        height: ICON_SIZE,
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)("rect", {
                x: "25",
                y: "20",
                width: "20",
                height: "60",
                fill: "#fff",
                ry: "5",
                rx: "5"
            }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)("rect", {
                x: "55",
                y: "20",
                width: "20",
                height: "60",
                fill: "#fff",
                ry: "5",
                rx: "5"
            })
        ]
    });
};
var FullscreenIcon = ({ isFullscreen })=>{
    const strokeWidth = 6;
    const viewSize = 32;
    const out = isFullscreen ? 0 : strokeWidth / 2;
    const middleInset = isFullscreen ? strokeWidth * 1.6 : strokeWidth / 2;
    const inset = isFullscreen ? strokeWidth * 1.6 : strokeWidth * 2;
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)("svg", {
        viewBox: `0 0 ${viewSize} ${viewSize}`,
        height: fullscreenIconSize,
        width: fullscreenIconSize,
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)("path", {
                d: `
				M ${out} ${inset}
				L ${middleInset} ${middleInset}
				L ${inset} ${out}
				`,
                stroke: "#fff",
                strokeWidth,
                fill: "none"
            }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)("path", {
                d: `
				M ${viewSize - out} ${inset}
				L ${viewSize - middleInset} ${middleInset}
				L ${viewSize - inset} ${out}
				`,
                stroke: "#fff",
                strokeWidth,
                fill: "none"
            }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)("path", {
                d: `
				M ${out} ${viewSize - inset}
				L ${middleInset} ${viewSize - middleInset}
				L ${inset} ${viewSize - out}
				`,
                stroke: "#fff",
                strokeWidth,
                fill: "none"
            }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)("path", {
                d: `
				M ${viewSize - out} ${viewSize - inset}
				L ${viewSize - middleInset} ${viewSize - middleInset}
				L ${viewSize - inset} ${viewSize - out}
				`,
                stroke: "#fff",
                strokeWidth,
                fill: "none"
            })
        ]
    });
};
var VolumeOffIcon = ()=>{
    return /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", {
        width: ICON_SIZE,
        height: ICON_SIZE,
        viewBox: "0 0 24 24",
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)("path", {
            d: "M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 101.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12A4.5 4.5 0 0014 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z",
            fill: "#fff"
        })
    });
};
var VolumeOnIcon = ()=>{
    return /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", {
        width: ICON_SIZE,
        height: ICON_SIZE,
        viewBox: "0 0 24 24",
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)("path", {
            d: "M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z",
            fill: "#fff"
        })
    });
};
// src/BufferingIndicator.tsx

var className = "__remotion_buffering_indicator";
var remotionBufferingAnimation = "__remotion_buffering_animation";
var playerStyle = {
    width: ICON_SIZE,
    height: ICON_SIZE,
    overflow: "hidden",
    lineHeight: "normal",
    fontSize: "inherit"
};
var studioStyle = {
    width: 14,
    height: 14,
    overflow: "hidden",
    lineHeight: "normal",
    fontSize: "inherit"
};
var BufferingIndicator = ({ type })=>{
    const style = type === "player" ? playerStyle : studioStyle;
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)("style", {
                type: "text/css",
                children: `
				@keyframes ${remotionBufferingAnimation} {
          0% {
            rotate: 0deg;
          }
          100% {
            rotate: 360deg;
          }
        }
        
        .${className} {
            animation: ${remotionBufferingAnimation} 1s linear infinite;
        }        
			`
            }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                style,
                children: /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", {
                    viewBox: type === "player" ? "0 0 22 22" : "0 0 18 18",
                    style,
                    className,
                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)("path", {
                        d: type === "player" ? "M 11 4 A 7 7 0 0 1 15.1145 16.66312" : "M 9 2 A 7 7 0 0 1 13.1145 14.66312",
                        stroke: "white",
                        strokeLinecap: "round",
                        fill: "none",
                        strokeWidth: 3
                    })
                })
            })
        ]
    });
};
// src/calculate-scale.ts

// src/utils/calculate-player-size.ts
var calculatePlayerSize = ({ currentSize, width, height, compositionWidth, compositionHeight })=>{
    if (width !== undefined && height === undefined) {
        return {
            aspectRatio: [
                compositionWidth,
                compositionHeight
            ].join("/")
        };
    }
    if (height !== undefined && width === undefined) {
        return {
            aspectRatio: [
                compositionWidth,
                compositionHeight
            ].join("/")
        };
    }
    if (!currentSize) {
        return {
            width: compositionWidth,
            height: compositionHeight
        };
    }
    return {
        width: compositionWidth,
        height: compositionHeight
    };
};
// src/calculate-scale.ts
var calculateCanvasTransformation = ({ previewSize, compositionWidth, compositionHeight, canvasSize })=>{
    const scale = esm/* Internals */.Xp.calculateScale({
        canvasSize,
        compositionHeight,
        compositionWidth,
        previewSize
    });
    const correction = 0 - (1 - scale) / 2;
    const xCorrection = correction * compositionWidth;
    const yCorrection = correction * compositionHeight;
    const width = compositionWidth * scale;
    const height = compositionHeight * scale;
    const centerX = canvasSize.width / 2 - width / 2;
    const centerY = canvasSize.height / 2 - height / 2;
    return {
        centerX,
        centerY,
        xCorrection,
        yCorrection,
        scale
    };
};
var calculateOuterStyle = ({ config, style, canvasSize, overflowVisible, layout })=>{
    if (!config) {
        return {};
    }
    return {
        position: "relative",
        overflow: overflowVisible ? "visible" : "hidden",
        ...calculatePlayerSize({
            compositionHeight: config.height,
            compositionWidth: config.width,
            currentSize: canvasSize,
            height: style?.height,
            width: style?.width
        }),
        opacity: layout ? 1 : 0,
        ...style
    };
};
var calculateContainerStyle = ({ config, layout, scale, overflowVisible })=>{
    if (!config) {
        return {};
    }
    if (!layout) {
        return {
            position: "absolute",
            width: config.width,
            height: config.height,
            display: "flex",
            transform: `scale(${scale})`,
            overflow: overflowVisible ? "visible" : "hidden"
        };
    }
    return {
        position: "absolute",
        width: config.width,
        height: config.height,
        display: "flex",
        transform: `scale(${scale})`,
        marginLeft: layout.xCorrection,
        marginTop: layout.yCorrection,
        overflow: overflowVisible ? "visible" : "hidden"
    };
};
var calculateOuter = ({ layout, scale, config, overflowVisible })=>{
    if (!config) {
        return {};
    }
    if (!layout) {
        return {
            width: config.width * scale,
            height: config.height * scale,
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            overflow: overflowVisible ? "visible" : "hidden"
        };
    }
    const { centerX, centerY } = layout;
    return {
        width: config.width * scale,
        height: config.height * scale,
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: centerX,
        top: centerY,
        overflow: overflowVisible ? "visible" : "hidden"
    };
};
// src/emitter-context.ts

var PlayerEventEmitterContext = /*#__PURE__*/ react.createContext(undefined);
var ThumbnailEmitterContext = /*#__PURE__*/ react.createContext(undefined);
// src/EmitterProvider.tsx


// src/event-emitter.ts
class PlayerEmitter {
    addEventListener(name, callback) {
        this.listeners[name].push(callback);
    }
    removeEventListener(name, callback) {
        this.listeners[name] = this.listeners[name].filter((l)=>l !== callback);
    }
    dispatchEvent(dispatchName, context) {
        this.listeners[dispatchName].forEach((callback)=>{
            callback({
                detail: context
            });
        });
    }
    constructor(){
        this.listeners = {
            ended: [],
            error: [],
            pause: [],
            play: [],
            ratechange: [],
            scalechange: [],
            seeked: [],
            timeupdate: [],
            frameupdate: [],
            fullscreenchange: [],
            volumechange: [],
            mutechange: [],
            waiting: [],
            resume: []
        };
        this.dispatchSeek = (frame)=>{
            this.dispatchEvent("seeked", {
                frame
            });
        };
        this.dispatchVolumeChange = (volume)=>{
            this.dispatchEvent("volumechange", {
                volume
            });
        };
        this.dispatchPause = ()=>{
            this.dispatchEvent("pause", undefined);
        };
        this.dispatchPlay = ()=>{
            this.dispatchEvent("play", undefined);
        };
        this.dispatchEnded = ()=>{
            this.dispatchEvent("ended", undefined);
        };
        this.dispatchRateChange = (playbackRate)=>{
            this.dispatchEvent("ratechange", {
                playbackRate
            });
        };
        this.dispatchScaleChange = (scale)=>{
            this.dispatchEvent("scalechange", {
                scale
            });
        };
        this.dispatchError = (error)=>{
            this.dispatchEvent("error", {
                error
            });
        };
        this.dispatchTimeUpdate = (event)=>{
            this.dispatchEvent("timeupdate", event);
        };
        this.dispatchFrameUpdate = (event)=>{
            this.dispatchEvent("frameupdate", event);
        };
        this.dispatchFullscreenChange = (event)=>{
            this.dispatchEvent("fullscreenchange", event);
        };
        this.dispatchMuteChange = (event)=>{
            this.dispatchEvent("mutechange", event);
        };
        this.dispatchWaiting = (event)=>{
            this.dispatchEvent("waiting", event);
        };
        this.dispatchResume = (event)=>{
            this.dispatchEvent("resume", event);
        };
    }
}
class ThumbnailEmitter {
    addEventListener(name, callback) {
        this.listeners[name].push(callback);
    }
    removeEventListener(name, callback) {
        this.listeners[name] = this.listeners[name].filter((l)=>l !== callback);
    }
    dispatchEvent(dispatchName, context) {
        this.listeners[dispatchName].forEach((callback)=>{
            callback({
                detail: context
            });
        });
    }
    constructor(){
        this.listeners = {
            error: [],
            waiting: [],
            resume: []
        };
        this.dispatchError = (error)=>{
            this.dispatchEvent("error", {
                error
            });
        };
        this.dispatchWaiting = (event)=>{
            this.dispatchEvent("waiting", event);
        };
        this.dispatchResume = (event)=>{
            this.dispatchEvent("resume", event);
        };
    }
}
// src/use-buffer-state-emitter.ts


var useBufferStateEmitter = (emitter)=>{
    const bufferManager = (0,react.useContext)(esm/* Internals */.Xp.BufferingContextReact);
    if (!bufferManager) {
        throw new Error("BufferingContextReact not found");
    }
    (0,react.useLayoutEffect)(()=>{
        const clear1 = bufferManager.listenForBuffering(()=>{
            bufferManager.buffering.current = true;
            emitter.dispatchWaiting({});
        });
        const clear2 = bufferManager.listenForResume(()=>{
            bufferManager.buffering.current = false;
            emitter.dispatchResume({});
        });
        return ()=>{
            clear1.remove();
            clear2.remove();
        };
    }, [
        bufferManager,
        emitter
    ]);
};
// src/EmitterProvider.tsx

var PlayerEmitterProvider = ({ children, currentPlaybackRate })=>{
    const [emitter] = (0,react.useState)(()=>new PlayerEmitter);
    const bufferManager = (0,react.useContext)(esm/* Internals */.Xp.BufferingContextReact);
    if (!bufferManager) {
        throw new Error("BufferingContextReact not found");
    }
    (0,react.useEffect)(()=>{
        if (currentPlaybackRate) {
            emitter.dispatchRateChange(currentPlaybackRate);
        }
    }, [
        emitter,
        currentPlaybackRate
    ]);
    useBufferStateEmitter(emitter);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(PlayerEventEmitterContext.Provider, {
        value: emitter,
        children
    });
};
// src/use-hover-state.ts

var useHoverState = (ref, hideControlsWhenPointerDoesntMove)=>{
    const [hovered, setHovered] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        const { current } = ref;
        if (!current) {
            return;
        }
        let hoverTimeout;
        const addHoverTimeout = ()=>{
            if (hideControlsWhenPointerDoesntMove) {
                clearTimeout(hoverTimeout);
                hoverTimeout = setTimeout(()=>{
                    setHovered(false);
                }, hideControlsWhenPointerDoesntMove === true ? 3000 : hideControlsWhenPointerDoesntMove);
            }
        };
        const onHover = ()=>{
            setHovered(true);
            addHoverTimeout();
        };
        const onLeave = ()=>{
            setHovered(false);
            clearTimeout(hoverTimeout);
        };
        const onMove = ()=>{
            setHovered(true);
            addHoverTimeout();
        };
        current.addEventListener("mouseenter", onHover);
        current.addEventListener("mouseleave", onLeave);
        current.addEventListener("mousemove", onMove);
        return ()=>{
            current.removeEventListener("mouseenter", onHover);
            current.removeEventListener("mouseleave", onLeave);
            current.removeEventListener("mousemove", onMove);
            clearTimeout(hoverTimeout);
        };
    }, [
        hideControlsWhenPointerDoesntMove,
        ref
    ]);
    return hovered;
};
// src/use-playback.ts



// src/browser-mediasession.ts

// src/use-player.ts


var usePlayer = ()=>{
    const [playing, setPlaying, imperativePlaying] = esm/* Internals */.Xp.Timeline.usePlayingState();
    const [hasPlayed, setHasPlayed] = (0,react.useState)(false);
    const frame = esm/* Internals */.Xp.Timeline.useTimelinePosition();
    const playStart = (0,react.useRef)(frame);
    const setFrame = esm/* Internals */.Xp.Timeline.useTimelineSetFrame();
    const setTimelinePosition = esm/* Internals */.Xp.Timeline.useTimelineSetFrame();
    const audioContext = (0,react.useContext)(esm/* Internals */.Xp.SharedAudioContext);
    const audioTagsContext = (0,react.useContext)(esm/* Internals */.Xp.SharedAudioTagsContext);
    const { audioAndVideoTags } = esm/* Internals */.Xp.useTimelineContext();
    const frameRef = (0,react.useRef)(frame);
    frameRef.current = frame;
    const video = esm/* Internals */.Xp.useVideo();
    const config = esm/* Internals */.Xp.useUnsafeVideoConfig();
    const emitter = (0,react.useContext)(PlayerEventEmitterContext);
    const lastFrame = (config?.durationInFrames ?? 1) - 1;
    const isLastFrame = frame === lastFrame;
    const isFirstFrame = frame === 0;
    if (!emitter) {
        throw new TypeError("Expected Player event emitter context");
    }
    const bufferingContext = (0,react.useContext)(esm/* Internals */.Xp.BufferingContextReact);
    if (!bufferingContext) {
        throw new Error("Missing the buffering context. Most likely you have a Remotion version mismatch.");
    }
    const { buffering } = bufferingContext;
    const seek = (0,react.useCallback)((newFrame)=>{
        const frameToSeekTo = config ? esm/* Internals */.Xp.TimelinePosition.clampFrameToCompositionRange(newFrame, config.durationInFrames) : Math.max(0, newFrame);
        if (video?.id) {
            setTimelinePosition((c)=>({
                    ...c,
                    [video.id]: frameToSeekTo
                }));
        }
        frameRef.current = frameToSeekTo;
        emitter.dispatchSeek(frameToSeekTo);
    }, [
        config,
        emitter,
        setTimelinePosition,
        video?.id
    ]);
    const play = (0,react.useCallback)((e)=>{
        if (imperativePlaying.current) {
            return;
        }
        setHasPlayed(true);
        if (isLastFrame) {
            seek(0);
        }
        audioContext?.resume();
        if (audioTagsContext && audioTagsContext.numberOfAudioTags > 0 && e) {
            audioTagsContext.playAllAudios();
        }
        audioAndVideoTags.current.forEach((a)=>a.play("player play() was called and playing audio from a click"));
        imperativePlaying.current = true;
        setPlaying(true);
        playStart.current = frameRef.current;
        emitter.dispatchPlay();
    }, [
        imperativePlaying,
        isLastFrame,
        audioContext,
        audioTagsContext,
        setPlaying,
        emitter,
        seek,
        audioAndVideoTags
    ]);
    const pause = (0,react.useCallback)(()=>{
        if (imperativePlaying.current) {
            imperativePlaying.current = false;
            setPlaying(false);
            emitter.dispatchPause();
            audioContext?.suspend();
        }
    }, [
        emitter,
        imperativePlaying,
        setPlaying,
        audioContext
    ]);
    const pauseAndReturnToPlayStart = (0,react.useCallback)(()=>{
        if (imperativePlaying.current) {
            imperativePlaying.current = false;
            frameRef.current = playStart.current;
            if (config) {
                setTimelinePosition((c)=>({
                        ...c,
                        [config.id]: playStart.current
                    }));
                setPlaying(false);
                emitter.dispatchPause();
            }
        }
    }, [
        config,
        emitter,
        imperativePlaying,
        setPlaying,
        setTimelinePosition
    ]);
    const videoId = video?.id;
    const frameBack = (0,react.useCallback)((frames)=>{
        if (!videoId) {
            return null;
        }
        if (imperativePlaying.current) {
            return;
        }
        setFrame((c)=>{
            const prevFrame = c[videoId] ?? window.remotion_initialFrame ?? 0;
            const newFrame = Math.max(0, prevFrame - frames);
            if (prevFrame === newFrame) {
                return c;
            }
            return {
                ...c,
                [videoId]: newFrame
            };
        });
    }, [
        imperativePlaying,
        setFrame,
        videoId
    ]);
    const frameForward = (0,react.useCallback)((frames)=>{
        if (!videoId) {
            return null;
        }
        if (imperativePlaying.current) {
            return;
        }
        setFrame((c)=>{
            const prevFrame = c[videoId] ?? window.remotion_initialFrame ?? 0;
            const newFrame = Math.min(lastFrame, prevFrame + frames);
            if (prevFrame === newFrame) {
                return c;
            }
            return {
                ...c,
                [videoId]: newFrame
            };
        });
    }, [
        videoId,
        imperativePlaying,
        lastFrame,
        setFrame
    ]);
    const toggle = (0,react.useCallback)((e)=>{
        if (imperativePlaying.current) {
            pause();
        } else {
            play(e);
        }
    }, [
        imperativePlaying,
        pause,
        play
    ]);
    const isPlaying = (0,react.useCallback)(()=>{
        return imperativePlaying.current;
    }, [
        imperativePlaying
    ]);
    const getCurrentFrame = (0,react.useCallback)(()=>{
        return frameRef.current;
    }, [
        frameRef
    ]);
    const isBuffering = (0,react.useCallback)(()=>{
        return buffering.current;
    }, [
        buffering
    ]);
    const returnValue = (0,react.useMemo)(()=>{
        return {
            frameBack,
            frameForward,
            isLastFrame,
            emitter,
            playing,
            play,
            pause,
            seek,
            isFirstFrame,
            getCurrentFrame,
            isPlaying,
            isBuffering,
            pauseAndReturnToPlayStart,
            hasPlayed,
            toggle
        };
    }, [
        emitter,
        frameBack,
        frameForward,
        hasPlayed,
        isFirstFrame,
        isLastFrame,
        getCurrentFrame,
        pause,
        pauseAndReturnToPlayStart,
        play,
        playing,
        seek,
        toggle,
        isPlaying,
        isBuffering
    ]);
    return returnValue;
};
// src/browser-mediasession.ts
var useBrowserMediaSession = ({ browserMediaControlsBehavior, videoConfig, playbackRate })=>{
    const { playing, pause, play, emitter, getCurrentFrame, seek } = usePlayer();
    const hasEverPlayed = (0,react.useRef)(false);
    (0,react.useEffect)(()=>{
        if (playing) {
            hasEverPlayed.current = true;
        }
    }, [
        playing
    ]);
    (0,react.useEffect)(()=>{
        if (!navigator.mediaSession) {
            return;
        }
        if (browserMediaControlsBehavior.mode === "do-nothing") {
            return;
        }
        if (playing) {
            navigator.mediaSession.playbackState = "playing";
        } else if (hasEverPlayed.current) {
            navigator.mediaSession.playbackState = "paused";
        }
    }, [
        browserMediaControlsBehavior.mode,
        playing
    ]);
    (0,react.useEffect)(()=>{
        if (!navigator.mediaSession) {
            return;
        }
        if (browserMediaControlsBehavior.mode === "do-nothing") {
            return;
        }
        const onTimeUpdate = ()=>{
            if (!videoConfig) {
                return;
            }
            if (navigator.mediaSession) {
                navigator.mediaSession.setPositionState({
                    duration: videoConfig.durationInFrames / videoConfig.fps,
                    playbackRate,
                    position: getCurrentFrame() / videoConfig.fps
                });
            }
        };
        emitter.addEventListener("timeupdate", onTimeUpdate);
        return ()=>{
            emitter.removeEventListener("timeupdate", onTimeUpdate);
        };
    }, [
        browserMediaControlsBehavior.mode,
        emitter,
        getCurrentFrame,
        playbackRate,
        videoConfig
    ]);
    (0,react.useEffect)(()=>{
        if (!navigator.mediaSession) {
            return;
        }
        if (browserMediaControlsBehavior.mode === "do-nothing") {
            return;
        }
        navigator.mediaSession.setActionHandler("play", ()=>{
            if (browserMediaControlsBehavior.mode === "register-media-session") {
                play();
            }
        });
        navigator.mediaSession.setActionHandler("pause", ()=>{
            if (browserMediaControlsBehavior.mode === "register-media-session") {
                pause();
            }
        });
        navigator.mediaSession.setActionHandler("seekto", (event)=>{
            if (browserMediaControlsBehavior.mode === "register-media-session" && event.seekTime !== undefined && videoConfig) {
                seek(Math.round(event.seekTime * videoConfig.fps));
            }
        });
        navigator.mediaSession.setActionHandler("seekbackward", ()=>{
            if (browserMediaControlsBehavior.mode === "register-media-session" && videoConfig) {
                seek(Math.max(0, Math.round((getCurrentFrame() - 10) * videoConfig.fps)));
            }
        });
        navigator.mediaSession.setActionHandler("seekforward", ()=>{
            if (browserMediaControlsBehavior.mode === "register-media-session" && videoConfig) {
                seek(Math.max(videoConfig.durationInFrames - 1, Math.round((getCurrentFrame() + 10) * videoConfig.fps)));
            }
        });
        navigator.mediaSession.setActionHandler("previoustrack", ()=>{
            if (browserMediaControlsBehavior.mode === "register-media-session") {
                seek(0);
            }
        });
        return ()=>{
            navigator.mediaSession.metadata = null;
            navigator.mediaSession.setActionHandler("play", null);
            navigator.mediaSession.setActionHandler("pause", null);
            navigator.mediaSession.setActionHandler("seekto", null);
            navigator.mediaSession.setActionHandler("seekbackward", null);
            navigator.mediaSession.setActionHandler("seekforward", null);
            navigator.mediaSession.setActionHandler("previoustrack", null);
        };
    }, [
        browserMediaControlsBehavior.mode,
        getCurrentFrame,
        pause,
        play,
        seek,
        videoConfig
    ]);
};
// src/calculate-next-frame.ts
var calculateNextFrame = ({ time, currentFrame: startFrame, playbackSpeed, fps, actualLastFrame, actualFirstFrame, framesAdvanced, shouldLoop })=>{
    const op = playbackSpeed < 0 ? Math.ceil : Math.floor;
    const framesToAdvance = op(time * playbackSpeed / (1000 / fps)) - framesAdvanced;
    const nextFrame = framesToAdvance + startFrame;
    const isCurrentFrameOutside = startFrame > actualLastFrame || startFrame < actualFirstFrame;
    const isNextFrameOutside = nextFrame > actualLastFrame || nextFrame < actualFirstFrame;
    const hasEnded = !shouldLoop && isNextFrameOutside && !isCurrentFrameOutside;
    if (playbackSpeed > 0) {
        if (isNextFrameOutside) {
            return {
                nextFrame: actualFirstFrame,
                framesToAdvance,
                hasEnded
            };
        }
        return {
            nextFrame,
            framesToAdvance,
            hasEnded
        };
    }
    if (isNextFrameOutside) {
        return {
            nextFrame: actualLastFrame,
            framesToAdvance,
            hasEnded
        };
    }
    return {
        nextFrame,
        framesToAdvance,
        hasEnded
    };
};
// src/is-backgrounded.ts

var getIsBackgrounded = ()=>{
    if (typeof document === "undefined") {
        return false;
    }
    return document.visibilityState === "hidden";
};
var useIsBackgrounded = ()=>{
    const isBackgrounded = (0,react.useRef)(getIsBackgrounded());
    (0,react.useEffect)(()=>{
        const onVisibilityChange = ()=>{
            isBackgrounded.current = getIsBackgrounded();
        };
        document.addEventListener("visibilitychange", onVisibilityChange);
        return ()=>{
            document.removeEventListener("visibilitychange", onVisibilityChange);
        };
    }, []);
    return isBackgrounded;
};
// src/set-global-time-anchor.ts

var ALLOWED_GLOBAL_TIME_ANCHOR_SHIFT = 0.1;
var setGlobalTimeAnchor = ({ audioContext, audioSyncAnchor, absoluteTimeInSeconds, globalPlaybackRate, logLevel, force })=>{
    const newAnchor = audioContext.currentTime - absoluteTimeInSeconds / globalPlaybackRate;
    const shift = newAnchor - audioSyncAnchor.value;
    const { outputLatency } = audioContext;
    const safeOutputLatency = outputLatency === 0 ? 0.3 : outputLatency;
    const latency = audioContext.baseLatency + safeOutputLatency;
    if (Math.abs(shift) < ALLOWED_GLOBAL_TIME_ANCHOR_SHIFT + latency && !force) {
        return false;
    }
    if (Math.abs(shift) < Number.EPSILON) {
        return false;
    }
    esm/* Internals */.Xp.Log.verbose({
        logLevel,
        tag: "audio-scheduling"
    }, "Anchor " + (force ? "forcibly " : "") + "changed from %s to %s with shift %s", audioSyncAnchor.value, newAnchor, shift);
    audioSyncAnchor.value = newAnchor;
    return true;
};
// src/use-playback.ts
var shouldForceAnchorChange = (newState)=>{
    if (newState === "suspended" || newState === "running-to-suspended") {
        return true;
    }
    if (newState === "closed" || newState === "interrupted" || newState === "running" || newState === "suspended-to-running") {
        return false;
    }
    throw new Error(`Unexpected audio context state: ${newState}`);
};
var usePlayback = ({ loop, playbackRate, moveToBeginningWhenEnded, inFrame, outFrame, browserMediaControlsBehavior, getCurrentFrame, muted })=>{
    const config = esm/* Internals */.Xp.useUnsafeVideoConfig();
    const frame = esm/* Internals */.Xp.Timeline.useTimelinePosition();
    const { playing, pause, emitter, isPlaying } = usePlayer();
    const setFrame = esm/* Internals */.Xp.Timeline.useTimelineSetFrame();
    const sharedAudioContext = (0,react.useContext)(esm/* Internals */.Xp.SharedAudioContext);
    const logLevel = esm/* Internals */.Xp.useLogLevel();
    const isBackgroundedRef = useIsBackgrounded();
    const lastTimeUpdateTimestamp = (0,react.useRef)(0);
    const context = (0,react.useContext)(esm/* Internals */.Xp.BufferingContextReact);
    if (!context) {
        throw new Error("Missing the buffering context. Most likely you have a Remotion version mismatch.");
    }
    useBrowserMediaSession({
        browserMediaControlsBehavior,
        playbackRate,
        videoConfig: config
    });
    (0,react.useLayoutEffect)(()=>{
        if (!sharedAudioContext) {
            return;
        }
        if (!sharedAudioContext.audioContext) {
            return;
        }
        if (!config) {
            return;
        }
        if (muted) {
            return;
        }
        const changed = setGlobalTimeAnchor({
            audioContext: sharedAudioContext.audioContext,
            audioSyncAnchor: sharedAudioContext.audioSyncAnchor,
            absoluteTimeInSeconds: frame / config.fps,
            globalPlaybackRate: playbackRate,
            logLevel,
            force: false
        });
        if (changed) {
            sharedAudioContext.audioSyncAnchorEmitter.dispatch("changed");
        }
    }, [
        config,
        frame,
        logLevel,
        playbackRate,
        sharedAudioContext,
        muted
    ]);
    (0,react.useLayoutEffect)(()=>{
        const audioContext = sharedAudioContext?.audioContext;
        if (!audioContext) {
            return;
        }
        if (!config) {
            return;
        }
        if (muted) {
            return;
        }
        const callback = ()=>{
            const newState = sharedAudioContext?.getAudioContextState();
            if (newState && shouldForceAnchorChange(newState)) {
                setGlobalTimeAnchor({
                    audioContext,
                    audioSyncAnchor: sharedAudioContext.audioSyncAnchor,
                    absoluteTimeInSeconds: getCurrentFrame() / config.fps,
                    globalPlaybackRate: playbackRate,
                    logLevel,
                    force: true
                });
            }
        };
        audioContext?.addEventListener("statechange", callback);
        return ()=>{
            audioContext?.removeEventListener("statechange", callback);
        };
    }, [
        config,
        getCurrentFrame,
        logLevel,
        muted,
        playbackRate,
        sharedAudioContext
    ]);
    (0,react.useEffect)(()=>{
        if (!config) {
            return;
        }
        if (!playing) {
            sharedAudioContext?.suspend?.();
            return;
        }
        let hasBeenStopped = false;
        let reqAnimFrameCall = null;
        let startedTime = performance.now();
        let framesAdvanced = 0;
        const cancelQueuedFrame = ()=>{
            if (reqAnimFrameCall !== null) {
                if (reqAnimFrameCall.type === "raf") {
                    cancelAnimationFrame(reqAnimFrameCall.id);
                } else {
                    clearTimeout(reqAnimFrameCall.id);
                }
            }
        };
        const stop = ()=>{
            hasBeenStopped = true;
            cancelQueuedFrame();
        };
        const callback = ()=>{
            if (hasBeenStopped) {
                return;
            }
            if (!isPlaying()) {
                sharedAudioContext?.suspend?.();
                return;
            }
            if (!muted && !context.buffering.current) {
                sharedAudioContext?.resume?.();
            }
            const time = performance.now() - startedTime;
            const actualLastFrame = outFrame ?? config.durationInFrames - 1;
            const actualFirstFrame = inFrame ?? 0;
            const currentFrame = getCurrentFrame();
            const { nextFrame, framesToAdvance, hasEnded } = calculateNextFrame({
                time,
                currentFrame,
                playbackSpeed: playbackRate,
                fps: config.fps,
                actualFirstFrame,
                actualLastFrame,
                framesAdvanced,
                shouldLoop: loop
            });
            framesAdvanced += framesToAdvance;
            if (nextFrame !== getCurrentFrame() && (!hasEnded || moveToBeginningWhenEnded) && !context.buffering.current) {
                setFrame((c)=>({
                        ...c,
                        [config.id]: nextFrame
                    }));
            }
            if (hasEnded) {
                stop();
                pause();
                emitter.dispatchEnded();
                return;
            }
            queueNextFrame();
        };
        const queueNextFrame = ()=>{
            const getIsResumingAudioContext = sharedAudioContext?.getIsResumingAudioContext?.() ?? null;
            if (getIsResumingAudioContext !== null && !muted) {
                getIsResumingAudioContext.then(()=>{
                    startedTime = performance.now();
                    framesAdvanced = 0;
                    queueNextFrame();
                });
                return;
            }
            if (context.buffering.current) {
                if (!muted) {
                    sharedAudioContext?.suspend?.();
                }
                const stopListening = context.listenForResume(()=>{
                    stopListening.remove();
                    startedTime = performance.now();
                    framesAdvanced = 0;
                    queueNextFrame();
                });
                return;
            }
            if (isBackgroundedRef.current) {
                reqAnimFrameCall = {
                    type: "timeout",
                    id: setTimeout(callback, 1000 / config.fps)
                };
                return;
            }
            reqAnimFrameCall = {
                type: "raf",
                id: requestAnimationFrame(callback)
            };
        };
        queueNextFrame();
        const onVisibilityChange = ()=>{
            if (document.visibilityState === "visible") {
                return;
            }
            cancelQueuedFrame();
            callback();
        };
        window.addEventListener("visibilitychange", onVisibilityChange);
        return ()=>{
            window.removeEventListener("visibilitychange", onVisibilityChange);
            stop();
        };
    }, [
        config,
        loop,
        pause,
        playing,
        setFrame,
        emitter,
        playbackRate,
        inFrame,
        outFrame,
        moveToBeginningWhenEnded,
        isBackgroundedRef,
        getCurrentFrame,
        context,
        isPlaying,
        sharedAudioContext,
        logLevel,
        muted
    ]);
    (0,react.useEffect)(()=>{
        const now = performance.now();
        const timeSinceLastUpdate = now - lastTimeUpdateTimestamp.current;
        if (timeSinceLastUpdate >= 250) {
            emitter.dispatchTimeUpdate({
                frame
            });
            lastTimeUpdateTimestamp.current = now;
            return;
        }
        const timeoutId = setTimeout(()=>{
            emitter.dispatchTimeUpdate({
                frame
            });
            lastTimeUpdateTimestamp.current = performance.now();
        }, 250 - timeSinceLastUpdate);
        return ()=>clearTimeout(timeoutId);
    }, [
        emitter,
        frame
    ]);
    (0,react.useEffect)(()=>{
        emitter.dispatchFrameUpdate({
            frame
        });
    }, [
        emitter,
        frame
    ]);
};
// src/utils/use-element-size.ts

var elementSizeHooks = [];
var updateAllElementsSizes = ()=>{
    for (const listener of elementSizeHooks){
        listener();
    }
};
var getElement = (source)=>{
    if (!source) {
        return null;
    }
    if ("current" in source) {
        return source.current;
    }
    return source;
};
var useElementSize = (source, options)=>{
    const [size, setSize] = (0,react.useState)(()=>{
        const element = getElement(source);
        if (!element) {
            return null;
        }
        const rect = element.getClientRects();
        if (!rect[0]) {
            return null;
        }
        return {
            width: rect[0].width,
            height: rect[0].height,
            left: rect[0].x,
            top: rect[0].y,
            windowSize: {
                height: window.innerHeight,
                width: window.innerWidth
            }
        };
    });
    const observer = (0,react.useMemo)(()=>{
        if (typeof ResizeObserver === "undefined") {
            return null;
        }
        return new ResizeObserver((entries)=>{
            const { contentRect, target } = entries[0];
            const newSize = target.getClientRects();
            if (!newSize?.[0]) {
                setSize(null);
                return;
            }
            const probableCssParentScaleX = contentRect.width === 0 ? 1 : newSize[0].width / contentRect.width;
            const probableCssParentScaleY = contentRect.height === 0 ? 1 : newSize[0].height / contentRect.height;
            const width = options.shouldApplyCssTransforms || probableCssParentScaleX === 0 ? newSize[0].width : newSize[0].width * (1 / probableCssParentScaleX);
            const height = options.shouldApplyCssTransforms || probableCssParentScaleY === 0 ? newSize[0].height : newSize[0].height * (1 / probableCssParentScaleY);
            setSize((prevState)=>{
                const isSame = prevState && prevState.width === width && prevState.height === height && prevState.left === newSize[0].x && prevState.top === newSize[0].y && prevState.windowSize.height === window.innerHeight && prevState.windowSize.width === window.innerWidth;
                if (isSame) {
                    return prevState;
                }
                return {
                    width,
                    height,
                    left: newSize[0].x,
                    top: newSize[0].y,
                    windowSize: {
                        height: window.innerHeight,
                        width: window.innerWidth
                    }
                };
            });
        });
    }, [
        options.shouldApplyCssTransforms
    ]);
    const updateSize = (0,react.useCallback)(()=>{
        const element = getElement(source);
        if (!element) {
            return;
        }
        const rect = element.getClientRects();
        if (!rect[0]) {
            setSize(null);
            return;
        }
        setSize((prevState)=>{
            const isSame = prevState && prevState.width === rect[0].width && prevState.height === rect[0].height && prevState.left === rect[0].x && prevState.top === rect[0].y && prevState.windowSize.height === window.innerHeight && prevState.windowSize.width === window.innerWidth;
            if (isSame) {
                return prevState;
            }
            return {
                width: rect[0].width,
                height: rect[0].height,
                left: rect[0].x,
                top: rect[0].y,
                windowSize: {
                    height: window.innerHeight,
                    width: window.innerWidth
                }
            };
        });
    }, [
        source
    ]);
    (0,react.useEffect)(()=>{
        updateSize();
    }, [
        updateSize
    ]);
    (0,react.useEffect)(()=>{
        if (!observer) {
            return;
        }
        const element = getElement(source);
        if (element) {
            observer.observe(element);
        }
        return ()=>{
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [
        observer,
        source
    ]);
    (0,react.useEffect)(()=>{
        if (!options.triggerOnWindowResize) {
            return;
        }
        window.addEventListener("resize", updateSize);
        return ()=>{
            window.removeEventListener("resize", updateSize);
        };
    }, [
        options.triggerOnWindowResize,
        updateSize
    ]);
    (0,react.useEffect)(()=>{
        elementSizeHooks.push(updateSize);
        return ()=>{
            elementSizeHooks = elementSizeHooks.filter((e)=>e !== updateSize);
        };
    }, [
        updateSize
    ]);
    return (0,react.useMemo)(()=>{
        if (!size) {
            return null;
        }
        return {
            ...size,
            refresh: updateSize
        };
    }, [
        size,
        updateSize
    ]);
};
// src/Player.tsx


// src/player-css-classname.ts
var playerCssClassname = (override)=>{
    return override ?? "__remotion-player";
};
// src/PlayerUI.tsx


// src/error-boundary.tsx


var errorStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: "100%",
    width: "100%"
};
class ErrorBoundary extends react.Component {
    static getDerivedStateFromError(error) {
        return {
            hasError: error
        };
    }
    componentDidCatch(error) {
        this.props.onError(error);
    }
    render() {
        if (this.state.hasError) {
            return /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                style: errorStyle,
                children: this.props.errorFallback({
                    error: this.state.hasError
                })
            });
        }
        return this.props.children;
    }
    constructor(...args){
        super(...args), this.state = {
            hasError: null
        };
    }
}
// src/license-blacklist.tsx


var getHashOfDomain = async ()=>{
    if (typeof window === "undefined") {
        return null;
    }
    if (typeof window.crypto === "undefined") {
        return null;
    }
    if (typeof window.crypto.subtle === "undefined") {
        return null;
    }
    try {
        const hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(window.location.hostname));
        return Array.from(new Uint8Array(hashBuffer)).map((b)=>b.toString(16).padStart(2, "0")).join("");
    } catch  {
        return null;
    }
};
var style = {
    backgroundColor: "red",
    position: "absolute",
    padding: 12,
    fontFamily: "Arial"
};
var DOMAIN_BLACKLIST = [
    "28d262b44cc61fa750f1686b16ad0604dabfe193fbc263eec05c89b7ad4c2cd6",
    "4db1b0a94be33165dfefcb3ba03d04c7a2666dd27c496d3dc9fa41858e94925e",
    "fbc48530bbf245da790f63675e84e06bab38c3b114fab07eb350025119922bdc",
    "7baf10a8932757b1b3a22b3fce10a048747ac2f8eaf638603487e3705b07eb83",
    "8a6c21a598d8c667272b5207c051b85997bf5b45d5fb712378be3f27cd72c6a6",
    "a2f7aaac9c50a9255e7fc376110c4e0bfe153722dc66ed3c5d3bf2a135f65518"
];
var ran = false;
var RenderWarningIfBlacklist = ()=>{
    const [unlicensed, setUnlicensed] = react.useState(false);
    (0,react.useEffect)(()=>{
        if (ran) {
            return;
        }
        ran = true;
        getHashOfDomain().then((hash)=>{
            if (hash && DOMAIN_BLACKLIST.includes(hash)) {
                setUnlicensed(true);
            }
        }).catch(()=>{});
    }, []);
    (0,react.useEffect)(()=>{
        if (!unlicensed) {
            return;
        }
        const ensureBanner = ()=>{
            const banner = document.querySelector(".warning-banner");
            if (!banner) {
                const div = document.createElement("div");
                div.className = "warning-banner";
                Object.assign(div.style, style, {
                    zIndex: "9999",
                    cssText: `${style.cssText} !important;`
                });
                div.innerHTML = `
	        <a href="https://github.com/remotion-dev/remotion/pull/4589" style="color: white;">
	          Remotion Unlicensed – Contact hi@remotion.dev
	        </a>
	      `;
                document.body.appendChild(div);
            }
        };
        const observer = new MutationObserver(()=>ensureBanner());
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        return ()=>{
            observer.disconnect();
        };
    }, [
        unlicensed
    ]);
    if (!unlicensed) {
        return null;
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
        style,
        className: "warning-banner",
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)("a", {
            style: {
                color: "white"
            },
            href: "https://github.com/remotion-dev/remotion/pull/4589",
            children: "Remotion Unlicensed – Contact hi@remotion.dev"
        })
    });
};
// src/PlayerControls.tsx

// src/DefaultPlayPauseButton.tsx

var DefaultPlayPauseButton = ({ playing, buffering })=>{
    if (playing && buffering) {
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(BufferingIndicator, {
            type: "player"
        });
    }
    if (playing) {
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(PauseIcon, {});
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(PlayIcon, {});
};
// src/MediaVolumeSlider.tsx


// src/render-volume-slider.tsx



var KNOB_SIZE = 12;
var BAR_HEIGHT = 5;
var DefaultVolumeSlider = ({ volume, isVertical, onBlur, inputRef, setVolume })=>{
    const sliderContainer = (0,react.useMemo)(()=>{
        const paddingLeft = 5;
        const common = {
            paddingLeft,
            height: ICON_SIZE,
            width: VOLUME_SLIDER_WIDTH,
            display: "inline-flex",
            alignItems: "center"
        };
        if (isVertical) {
            return {
                ...common,
                position: "absolute",
                transform: `rotate(-90deg) translateX(${VOLUME_SLIDER_WIDTH / 2 + ICON_SIZE / 2}px)`
            };
        }
        return {
            ...common
        };
    }, [
        isVertical
    ]);
    const randomId = typeof react.useId === "undefined" ? "volume-slider" : react.useId();
    const [randomClass] = (0,react.useState)(()=>`__remotion-volume-slider-${(0,esm/* random */.yT)(randomId)}`.replace(".", ""));
    const onVolumeChange = (0,react.useCallback)((e)=>{
        setVolume(parseFloat(e.target.value));
    }, [
        setVolume
    ]);
    const inputStyle = (0,react.useMemo)(()=>{
        const commonStyle = {
            WebkitAppearance: "none",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: BAR_HEIGHT / 2,
            cursor: "pointer",
            height: BAR_HEIGHT,
            width: VOLUME_SLIDER_WIDTH,
            backgroundImage: `linear-gradient(
				to right,
				white ${volume * 100}%, rgba(255, 255, 255, 0) ${volume * 100}%
			)`
        };
        if (isVertical) {
            return {
                ...commonStyle,
                bottom: ICON_SIZE + VOLUME_SLIDER_WIDTH / 2
            };
        }
        return commonStyle;
    }, [
        isVertical,
        volume
    ]);
    const sliderStyle = `
	.${randomClass}::-webkit-slider-thumb {
		-webkit-appearance: none;
		background-color: white;
		border-radius: ${KNOB_SIZE / 2}px;
		box-shadow: 0 0 2px black;
		height: ${KNOB_SIZE}px;
		width: ${KNOB_SIZE}px;
	}

	.${randomClass}::-moz-range-thumb {
		-webkit-appearance: none;
		background-color: white;
		border-radius: ${KNOB_SIZE / 2}px;
		box-shadow: 0 0 2px black;
		height: ${KNOB_SIZE}px;
		width: ${KNOB_SIZE}px;
	}
`;
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", {
        style: sliderContainer,
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)("style", {
                dangerouslySetInnerHTML: {
                    __html: sliderStyle
                }
            }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)("input", {
                ref: inputRef,
                "aria-label": "Change volume",
                className: randomClass,
                max: 1,
                min: 0,
                onBlur,
                onChange: onVolumeChange,
                step: 0.01,
                type: "range",
                value: volume,
                style: inputStyle
            })
        ]
    });
};
var renderDefaultVolumeSlider = (props)=>{
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(DefaultVolumeSlider, {
        ...props
    });
};
// src/MediaVolumeSlider.tsx

var VOLUME_SLIDER_WIDTH = 100;
var MediaVolumeSlider = ({ displayVerticalVolumeSlider, renderMuteButton, renderVolumeSlider })=>{
    const [playerMuted, setPlayerMuted] = esm/* Internals */.Xp.usePlayerMutedState();
    const [mediaVolume, setMediaVolume] = esm/* Internals */.Xp.useMediaVolumeState();
    const [focused, setFocused] = (0,react.useState)(false);
    const parentDivRef = (0,react.useRef)(null);
    const inputRef = (0,react.useRef)(null);
    const hover = useHoverState(parentDivRef, false);
    const onBlur = (0,react.useCallback)(()=>{
        setTimeout(()=>{
            if (inputRef.current && document.activeElement !== inputRef.current) {
                setFocused(false);
            }
        }, 10);
    }, []);
    const isVolume0 = mediaVolume === 0;
    const onClick = (0,react.useCallback)(()=>{
        if (isVolume0) {
            setMediaVolume(1);
            setPlayerMuted(false);
            return;
        }
        setPlayerMuted((mute)=>!mute);
    }, [
        isVolume0,
        setPlayerMuted,
        setMediaVolume
    ]);
    const parentDivStyle = (0,react.useMemo)(()=>{
        return {
            display: "inline-flex",
            background: "none",
            border: "none",
            justifyContent: "center",
            alignItems: "center",
            touchAction: "none",
            ...displayVerticalVolumeSlider && {
                position: "relative"
            }
        };
    }, [
        displayVerticalVolumeSlider
    ]);
    const volumeContainer = (0,react.useMemo)(()=>{
        return {
            display: "inline",
            width: ICON_SIZE,
            height: ICON_SIZE,
            cursor: "pointer",
            appearance: "none",
            background: "none",
            border: "none",
            padding: 0
        };
    }, []);
    const renderDefaultMuteButton = (0,react.useCallback)(({ muted, volume })=>{
        const isMutedOrZero = muted || volume === 0;
        return /* @__PURE__ */ (0,jsx_runtime.jsx)("button", {
            "aria-label": isMutedOrZero ? "Unmute sound" : "Mute sound",
            title: isMutedOrZero ? "Unmute sound" : "Mute sound",
            onClick,
            onBlur,
            onFocus: ()=>setFocused(true),
            style: volumeContainer,
            type: "button",
            children: isMutedOrZero ? /* @__PURE__ */ (0,jsx_runtime.jsx)(VolumeOffIcon, {}) : /* @__PURE__ */ (0,jsx_runtime.jsx)(VolumeOnIcon, {})
        });
    }, [
        onBlur,
        onClick,
        volumeContainer
    ]);
    const muteButton = (0,react.useMemo)(()=>{
        return renderMuteButton ? renderMuteButton({
            muted: playerMuted,
            volume: mediaVolume
        }) : renderDefaultMuteButton({
            muted: playerMuted,
            volume: mediaVolume
        });
    }, [
        playerMuted,
        mediaVolume,
        renderDefaultMuteButton,
        renderMuteButton
    ]);
    const volumeSlider = (0,react.useMemo)(()=>{
        return (focused || hover) && !playerMuted && !esm/* Internals */.Xp.isIosSafari() ? (renderVolumeSlider ?? renderDefaultVolumeSlider)({
            isVertical: displayVerticalVolumeSlider,
            volume: mediaVolume,
            onBlur: ()=>setFocused(false),
            inputRef,
            setVolume: setMediaVolume
        }) : null;
    }, [
        displayVerticalVolumeSlider,
        focused,
        hover,
        playerMuted,
        mediaVolume,
        renderVolumeSlider,
        setMediaVolume
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", {
        ref: parentDivRef,
        style: parentDivStyle,
        children: [
            muteButton,
            volumeSlider
        ]
    });
};
// src/PlaybackrateControl.tsx


// src/utils/use-component-visible.ts

function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = (0,react.useState)(initialIsVisible);
    const ref = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            if (ref.current && !ref.current.contains(event.target)) {
                setIsComponentVisible(false);
            }
        };
        document.addEventListener("pointerup", handleClickOutside, true);
        return ()=>{
            document.removeEventListener("pointerup", handleClickOutside, true);
        };
    }, []);
    return {
        ref,
        isComponentVisible,
        setIsComponentVisible
    };
}
// src/PlaybackrateControl.tsx

var BOTTOM = 35;
var THRESHOLD = 70;
var rateDiv = {
    height: 30,
    paddingRight: 15,
    paddingLeft: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
};
var checkmarkContainer = {
    width: 22,
    display: "flex",
    alignItems: "center"
};
var checkmarkStyle = {
    width: 14,
    height: 14,
    color: "black"
};
var Checkmark = ()=>/* @__PURE__ */ (0,jsx_runtime.jsx)("svg", {
        viewBox: "0 0 512 512",
        style: checkmarkStyle,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)("path", {
            fill: "currentColor",
            d: "M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
        })
    });
var formatPlaybackRate = (rate)=>{
    const str = rate.toString();
    return str.includes(".") ? str : str + ".0";
};
var PlaybackrateOption = ({ rate, onSelect, selectedRate, keyboardSelectedRate })=>{
    const onClick = (0,react.useCallback)((e)=>{
        e.stopPropagation();
        e.preventDefault();
        onSelect(rate);
    }, [
        onSelect,
        rate
    ]);
    const [hovered, setHovered] = (0,react.useState)(false);
    const onMouseEnter = (0,react.useCallback)(()=>{
        setHovered(true);
    }, []);
    const onMouseLeave = (0,react.useCallback)(()=>{
        setHovered(false);
    }, []);
    const isFocused = keyboardSelectedRate === rate;
    const actualStyle = (0,react.useMemo)(()=>{
        return {
            ...rateDiv,
            backgroundColor: hovered || isFocused ? "#eee" : "transparent"
        };
    }, [
        hovered,
        isFocused
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", {
        onPointerEnter: onMouseEnter,
        onPointerLeave: onMouseLeave,
        tabIndex: 0,
        style: actualStyle,
        onClick,
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                style: checkmarkContainer,
                children: rate === selectedRate ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Checkmark, {}) : null
            }),
            formatPlaybackRate(rate),
            "x"
        ]
    }, rate);
};
var PlaybackPopup = ({ setIsComponentVisible, playbackRates, canvasSize })=>{
    const { setPlaybackRate, playbackRate } = esm/* Internals */.Xp.usePlaybackRate();
    const [keyboardSelectedRate, setKeyboardSelectedRate] = (0,react.useState)(playbackRate);
    (0,react.useEffect)(()=>{
        const listener = (e)=>{
            e.preventDefault();
            if (e.key === "ArrowUp") {
                const currentIndex = playbackRates.findIndex((rate)=>rate === keyboardSelectedRate);
                if (currentIndex === 0) {
                    return;
                }
                if (currentIndex === -1) {
                    setKeyboardSelectedRate(playbackRates[0]);
                } else {
                    setKeyboardSelectedRate(playbackRates[currentIndex - 1]);
                }
            } else if (e.key === "ArrowDown") {
                const currentIndex = playbackRates.findIndex((rate)=>rate === keyboardSelectedRate);
                if (currentIndex === playbackRates.length - 1) {
                    return;
                }
                if (currentIndex === -1) {
                    setKeyboardSelectedRate(playbackRates[playbackRates.length - 1]);
                } else {
                    setKeyboardSelectedRate(playbackRates[currentIndex + 1]);
                }
            } else if (e.key === "Enter") {
                setPlaybackRate(keyboardSelectedRate);
                setIsComponentVisible(false);
            }
        };
        window.addEventListener("keydown", listener);
        return ()=>{
            window.removeEventListener("keydown", listener);
        };
    }, [
        playbackRates,
        keyboardSelectedRate,
        setPlaybackRate,
        setIsComponentVisible
    ]);
    const onSelect = (0,react.useCallback)((rate)=>{
        setPlaybackRate(rate);
        setIsComponentVisible(false);
    }, [
        setIsComponentVisible,
        setPlaybackRate
    ]);
    const playbackPopup = (0,react.useMemo)(()=>{
        return {
            position: "absolute",
            right: 0,
            width: 125,
            maxHeight: canvasSize.height - THRESHOLD - BOTTOM,
            bottom: 35,
            background: "#fff",
            borderRadius: 4,
            overflow: "auto",
            color: "black",
            textAlign: "left"
        };
    }, [
        canvasSize.height
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
        style: playbackPopup,
        children: playbackRates.map((rate)=>{
            return /* @__PURE__ */ (0,jsx_runtime.jsx)(PlaybackrateOption, {
                selectedRate: playbackRate,
                onSelect,
                rate,
                keyboardSelectedRate
            }, rate);
        })
    });
};
var label = {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    border: "2px solid white",
    borderRadius: 20,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2
};
var playerButtonStyle = {
    appearance: "none",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 6,
    paddingBottom: 6,
    height: 37,
    display: "inline-flex",
    marginBottom: 0,
    marginTop: 0,
    alignItems: "center"
};
var esm_button = {
    ...playerButtonStyle,
    position: "relative"
};
var PlaybackrateControl = ({ playbackRates, canvasSize })=>{
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    const { playbackRate } = esm/* Internals */.Xp.usePlaybackRate();
    const onClick = (0,react.useCallback)((e)=>{
        e.stopPropagation();
        e.preventDefault();
        setIsComponentVisible((prevIsComponentVisible)=>!prevIsComponentVisible);
    }, [
        setIsComponentVisible
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
        ref,
        children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("button", {
            type: "button",
            "aria-label": "Change playback rate",
            style: esm_button,
            onClick,
            children: [
                /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", {
                    style: label,
                    children: [
                        playbackRate,
                        "x"
                    ]
                }),
                isComponentVisible && /* @__PURE__ */ (0,jsx_runtime.jsx)(PlaybackPopup, {
                    canvasSize,
                    playbackRates,
                    setIsComponentVisible
                })
            ]
        })
    });
};
// src/PlayerSeekBar.tsx



var getFrameFromX = (clientX, durationInFrames, width)=>{
    const pos = clientX;
    const frame = Math.round((0,esm/* interpolate */.GW)(pos, [
        0,
        width
    ], [
        0,
        durationInFrames - 1
    ], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp"
    }));
    return frame;
};
var BAR_HEIGHT2 = 5;
var KNOB_SIZE2 = 12;
var VERTICAL_PADDING = 4;
var containerStyle = {
    userSelect: "none",
    WebkitUserSelect: "none",
    paddingTop: VERTICAL_PADDING,
    paddingBottom: VERTICAL_PADDING,
    boxSizing: "border-box",
    cursor: "pointer",
    position: "relative",
    touchAction: "none"
};
var barBackground = {
    height: BAR_HEIGHT2,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    width: "100%",
    borderRadius: BAR_HEIGHT2 / 2
};
var findBodyInWhichDivIsLocated = (div)=>{
    let current = div;
    while(current.parentElement){
        current = current.parentElement;
    }
    return current;
};
var PlayerSeekBar = ({ durationInFrames, onSeekEnd, onSeekStart, inFrame, outFrame })=>{
    const containerRef = (0,react.useRef)(null);
    const barHovered = useHoverState(containerRef, false);
    const size = useElementSize(containerRef, {
        triggerOnWindowResize: true,
        shouldApplyCssTransforms: true
    });
    const { seek, play, pause, playing } = usePlayer();
    const frame = esm/* Internals */.Xp.Timeline.useTimelinePosition();
    const [dragging, setDragging] = (0,react.useState)({
        dragging: false
    });
    const width = size?.width ?? 0;
    const onPointerDown = (0,react.useCallback)((e)=>{
        if (e.button !== 0) {
            return;
        }
        const posLeft = containerRef.current?.getBoundingClientRect().left;
        const _frame = getFrameFromX(e.clientX - posLeft, durationInFrames, width);
        pause();
        seek(_frame);
        setDragging({
            dragging: true,
            wasPlaying: playing
        });
        onSeekStart();
    }, [
        durationInFrames,
        width,
        pause,
        seek,
        playing,
        onSeekStart
    ]);
    const onPointerMove = (0,react.useCallback)((e)=>{
        if (!size) {
            throw new Error("Player has no size");
        }
        if (!dragging.dragging) {
            return;
        }
        const posLeft = containerRef.current?.getBoundingClientRect().left;
        const _frame = getFrameFromX(e.clientX - posLeft, durationInFrames, size.width);
        seek(_frame);
    }, [
        dragging.dragging,
        durationInFrames,
        seek,
        size
    ]);
    const onPointerUp = (0,react.useCallback)(()=>{
        setDragging({
            dragging: false
        });
        if (!dragging.dragging) {
            return;
        }
        if (dragging.wasPlaying) {
            play();
        } else {
            pause();
        }
        onSeekEnd();
    }, [
        dragging,
        onSeekEnd,
        pause,
        play
    ]);
    (0,react.useEffect)(()=>{
        if (!dragging.dragging) {
            return;
        }
        const body = findBodyInWhichDivIsLocated(containerRef.current);
        body.addEventListener("pointermove", onPointerMove);
        body.addEventListener("pointerup", onPointerUp);
        return ()=>{
            body.removeEventListener("pointermove", onPointerMove);
            body.removeEventListener("pointerup", onPointerUp);
        };
    }, [
        dragging.dragging,
        onPointerMove,
        onPointerUp
    ]);
    const knobStyle = (0,react.useMemo)(()=>{
        return {
            height: KNOB_SIZE2,
            width: KNOB_SIZE2,
            borderRadius: KNOB_SIZE2 / 2,
            position: "absolute",
            top: VERTICAL_PADDING - KNOB_SIZE2 / 2 + 5 / 2,
            backgroundColor: "white",
            left: Math.max(0, frame / Math.max(1, durationInFrames - 1) * width - KNOB_SIZE2 / 2),
            boxShadow: "0 0 2px black",
            opacity: Number(barHovered || dragging.dragging)
        };
    }, [
        barHovered,
        dragging.dragging,
        durationInFrames,
        frame,
        width
    ]);
    const fillStyle = (0,react.useMemo)(()=>{
        return {
            height: BAR_HEIGHT2,
            backgroundColor: "rgba(255, 255, 255, 1)",
            width: (frame - (inFrame ?? 0)) / (durationInFrames - 1) * width,
            marginLeft: (inFrame ?? 0) / (durationInFrames - 1) * width,
            borderRadius: BAR_HEIGHT2 / 2
        };
    }, [
        durationInFrames,
        frame,
        inFrame,
        width
    ]);
    const active = (0,react.useMemo)(()=>{
        return {
            height: BAR_HEIGHT2,
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            width: ((outFrame ?? durationInFrames - 1) - (inFrame ?? 0)) / (durationInFrames - 1) * 100 + "%",
            marginLeft: (inFrame ?? 0) / (durationInFrames - 1) * 100 + "%",
            borderRadius: BAR_HEIGHT2 / 2,
            position: "absolute"
        };
    }, [
        durationInFrames,
        inFrame,
        outFrame
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", {
        ref: containerRef,
        onPointerDown,
        style: containerStyle,
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", {
                style: barBackground,
                children: [
                    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                        style: active
                    }),
                    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                        style: fillStyle
                    })
                ]
            }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                style: knobStyle
            })
        ]
    });
};
// src/PlayerTimeLabel.tsx


// src/format-time.ts
var formatTime = (timeInSeconds)=>{
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds - minutes * 60);
    return `${String(minutes)}:${String(seconds).padStart(2, "0")}`;
};
// src/PlayerTimeLabel.tsx

var PlayerTimeLabel = ({ durationInFrames, maxTimeLabelWidth, fps })=>{
    const frame = esm/* Internals */.Xp.Timeline.useTimelinePosition();
    const timeLabel = (0,react.useMemo)(()=>{
        return {
            color: "white",
            fontFamily: "sans-serif",
            fontSize: 14,
            maxWidth: maxTimeLabelWidth === null ? undefined : maxTimeLabelWidth,
            overflow: "hidden",
            textOverflow: "ellipsis"
        };
    }, [
        maxTimeLabelWidth
    ]);
    const isLastFrame = frame === durationInFrames - 1;
    const frameToDisplay = isLastFrame ? frame + 1 : frame;
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", {
        style: timeLabel,
        children: [
            formatTime(frameToDisplay / fps),
            " / ",
            formatTime(durationInFrames / fps)
        ]
    });
};
// src/use-video-controls-resize.ts

var X_SPACER = 10;
var X_PADDING = 12;
var useVideoControlsResize = ({ allowFullscreen: allowFullScreen, playerWidth })=>{
    const resizeInfo = (0,react.useMemo)(()=>{
        const playPauseIconSize = ICON_SIZE;
        const volumeIconSize = ICON_SIZE;
        const _fullscreenIconSize = allowFullScreen ? fullscreenIconSize : 0;
        const elementsSize = volumeIconSize + playPauseIconSize + _fullscreenIconSize + X_PADDING * 2 + X_SPACER * 2;
        const maxTimeLabelWidth = playerWidth - elementsSize;
        const maxTimeLabelWidthWithoutNegativeValue = Math.max(maxTimeLabelWidth, 0);
        const availableTimeLabelWidthIfVolumeOpen = maxTimeLabelWidthWithoutNegativeValue - VOLUME_SLIDER_WIDTH;
        const computedLabelWidth = availableTimeLabelWidthIfVolumeOpen < VOLUME_SLIDER_WIDTH ? maxTimeLabelWidthWithoutNegativeValue : availableTimeLabelWidthIfVolumeOpen;
        const minWidthForHorizontalDisplay = computedLabelWidth + elementsSize + VOLUME_SLIDER_WIDTH;
        const displayVerticalVolumeSlider = playerWidth < minWidthForHorizontalDisplay;
        return {
            maxTimeLabelWidth: maxTimeLabelWidthWithoutNegativeValue === 0 ? null : maxTimeLabelWidthWithoutNegativeValue,
            displayVerticalVolumeSlider
        };
    }, [
        allowFullScreen,
        playerWidth
    ]);
    return resizeInfo;
};
// src/PlayerControls.tsx

var gradientSteps = [
    0,
    0.013,
    0.049,
    0.104,
    0.175,
    0.259,
    0.352,
    0.45,
    0.55,
    0.648,
    0.741,
    0.825,
    0.896,
    0.951,
    0.987
];
var gradientOpacities = [
    0,
    8.1,
    15.5,
    22.5,
    29,
    35.3,
    41.2,
    47.1,
    52.9,
    58.8,
    64.7,
    71,
    77.5,
    84.5,
    91.9
];
var globalGradientOpacity = 1 / 0.7;
var containerStyle2 = {
    boxSizing: "border-box",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingTop: 40,
    paddingBottom: 10,
    backgroundImage: `linear-gradient(to bottom,${gradientSteps.map((g, i)=>{
        return `hsla(0, 0%, 0%, ${g}) ${gradientOpacities[i] * globalGradientOpacity}%`;
    }).join(", ")}, hsl(0, 0%, 0%) 100%)`,
    backgroundSize: "auto 145px",
    display: "flex",
    paddingRight: X_PADDING,
    paddingLeft: X_PADDING,
    flexDirection: "column",
    transition: "opacity 0.3s"
};
var controlsRow = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    WebkitUserSelect: "none"
};
var leftPartStyle = {
    display: "flex",
    flexDirection: "row",
    userSelect: "none",
    WebkitUserSelect: "none",
    alignItems: "center"
};
var xSpacer = {
    width: 12
};
var ySpacer = {
    height: 8
};
var flex1 = {
    flex: 1
};
var fullscreen = {};
var Controls = ({ durationInFrames, isFullscreen, fps, showVolumeControls, onFullscreenButtonClick, allowFullscreen, onExitFullscreenButtonClick, spaceKeyToPlayOrPause, onSeekEnd, onSeekStart, inFrame, outFrame, initiallyShowControls, canvasSize, renderPlayPauseButton, renderFullscreenButton, alwaysShowControls, showPlaybackRateControl, containerRef, buffering, hideControlsWhenPointerDoesntMove, onPointerDown, onDoubleClick, renderMuteButton, renderVolumeSlider, playing, toggle, renderCustomControls })=>{
    const playButtonRef = (0,react.useRef)(null);
    const [supportsFullscreen, setSupportsFullscreen] = (0,react.useState)(false);
    const hovered = useHoverState(containerRef, hideControlsWhenPointerDoesntMove);
    const { maxTimeLabelWidth, displayVerticalVolumeSlider } = useVideoControlsResize({
        allowFullscreen,
        playerWidth: canvasSize?.width ?? 0
    });
    const [shouldShowInitially, setInitiallyShowControls] = (0,react.useState)(()=>{
        if (typeof initiallyShowControls === "boolean") {
            return initiallyShowControls;
        }
        if (typeof initiallyShowControls === "number") {
            if (initiallyShowControls % 1 !== 0) {
                throw new Error("initiallyShowControls must be an integer or a boolean");
            }
            if (Number.isNaN(initiallyShowControls)) {
                throw new Error("initiallyShowControls must not be NaN");
            }
            if (!Number.isFinite(initiallyShowControls)) {
                throw new Error("initiallyShowControls must be finite");
            }
            if (initiallyShowControls <= 0) {
                throw new Error("initiallyShowControls must be a positive integer");
            }
            return initiallyShowControls;
        }
        throw new TypeError("initiallyShowControls must be a number or a boolean");
    });
    const containerCss = (0,react.useMemo)(()=>{
        const shouldShow = hovered || !playing || shouldShowInitially || alwaysShowControls;
        return {
            ...containerStyle2,
            opacity: Number(shouldShow)
        };
    }, [
        hovered,
        shouldShowInitially,
        playing,
        alwaysShowControls
    ]);
    (0,react.useEffect)(()=>{
        if (playButtonRef.current && spaceKeyToPlayOrPause) {
            playButtonRef.current.focus({
                preventScroll: true
            });
        }
    }, [
        playing,
        spaceKeyToPlayOrPause
    ]);
    (0,react.useEffect)(()=>{
        setSupportsFullscreen((typeof document !== "undefined" && (document.fullscreenEnabled || document.webkitFullscreenEnabled)) ?? false);
    }, []);
    (0,react.useEffect)(()=>{
        if (shouldShowInitially === false) {
            return;
        }
        const time = shouldShowInitially === true ? 2000 : shouldShowInitially;
        const timeout = setTimeout(()=>{
            setInitiallyShowControls(false);
        }, time);
        return ()=>{
            clearInterval(timeout);
        };
    }, [
        shouldShowInitially
    ]);
    const playbackRates = (0,react.useMemo)(()=>{
        if (showPlaybackRateControl === true) {
            return [
                0.5,
                0.8,
                1,
                1.2,
                1.5,
                1.8,
                2,
                2.5,
                3
            ];
        }
        if (Array.isArray(showPlaybackRateControl)) {
            for (const rate of showPlaybackRateControl){
                if (typeof rate !== "number") {
                    throw new Error("Every item in showPlaybackRateControl must be a number");
                }
                if (rate <= 0) {
                    throw new Error("Every item in showPlaybackRateControl must be positive");
                }
            }
            return showPlaybackRateControl;
        }
        return null;
    }, [
        showPlaybackRateControl
    ]);
    const customControlsElement = renderCustomControls ? renderCustomControls() : null;
    const ref = (0,react.useRef)(null);
    const flexRef = (0,react.useRef)(null);
    const onPointerDownIfContainer = (0,react.useCallback)((e)=>{
        if (e.target === ref.current || e.target === flexRef.current) {
            onPointerDown?.(e);
        }
    }, [
        onPointerDown
    ]);
    const onDoubleClickIfContainer = (0,react.useCallback)((e)=>{
        if (e.target === ref.current || e.target === flexRef.current) {
            onDoubleClick?.(e);
        }
    }, [
        onDoubleClick
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", {
        ref,
        style: containerCss,
        onPointerDown: onPointerDownIfContainer,
        onDoubleClick: onDoubleClickIfContainer,
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", {
                ref: flexRef,
                style: controlsRow,
                children: [
                    /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", {
                        style: leftPartStyle,
                        children: [
                            /* @__PURE__ */ (0,jsx_runtime.jsx)("button", {
                                ref: playButtonRef,
                                type: "button",
                                style: playerButtonStyle,
                                onClick: toggle,
                                "aria-label": playing ? "Pause video" : "Play video",
                                title: playing ? "Pause video" : "Play video",
                                children: renderPlayPauseButton === null ? /* @__PURE__ */ (0,jsx_runtime.jsx)(DefaultPlayPauseButton, {
                                    buffering,
                                    playing
                                }) : renderPlayPauseButton({
                                    playing,
                                    isBuffering: buffering
                                }) ?? /* @__PURE__ */ (0,jsx_runtime.jsx)(DefaultPlayPauseButton, {
                                    buffering,
                                    playing
                                })
                            }),
                            showVolumeControls ? /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                                        style: xSpacer
                                    }),
                                    /* @__PURE__ */ (0,jsx_runtime.jsx)(MediaVolumeSlider, {
                                        renderMuteButton,
                                        renderVolumeSlider,
                                        displayVerticalVolumeSlider
                                    })
                                ]
                            }) : null,
                            /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                                style: xSpacer
                            }),
                            /* @__PURE__ */ (0,jsx_runtime.jsx)(PlayerTimeLabel, {
                                durationInFrames,
                                fps,
                                maxTimeLabelWidth
                            }),
                            /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                                style: xSpacer
                            })
                        ]
                    }),
                    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                        style: flex1
                    }),
                    customControlsElement,
                    customControlsElement && playbackRates && canvasSize ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                        style: xSpacer
                    }) : null,
                    playbackRates && canvasSize && /* @__PURE__ */ (0,jsx_runtime.jsx)(PlaybackrateControl, {
                        canvasSize,
                        playbackRates
                    }),
                    playbackRates && supportsFullscreen && allowFullscreen ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                        style: xSpacer
                    }) : null,
                    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                        style: fullscreen,
                        children: supportsFullscreen && allowFullscreen ? /* @__PURE__ */ (0,jsx_runtime.jsx)("button", {
                            type: "button",
                            "aria-label": isFullscreen ? "Exit fullscreen" : "Enter Fullscreen",
                            title: isFullscreen ? "Exit fullscreen" : "Enter Fullscreen",
                            style: playerButtonStyle,
                            onClick: isFullscreen ? onExitFullscreenButtonClick : onFullscreenButtonClick,
                            children: renderFullscreenButton === null ? /* @__PURE__ */ (0,jsx_runtime.jsx)(FullscreenIcon, {
                                isFullscreen
                            }) : renderFullscreenButton({
                                isFullscreen
                            })
                        }) : null
                    })
                ]
            }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                style: ySpacer
            }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)(PlayerSeekBar, {
                onSeekEnd,
                onSeekStart,
                durationInFrames,
                inFrame,
                outFrame
            })
        ]
    });
};
// src/utils/is-node.ts
var IS_NODE = typeof document === "undefined";
// src/utils/use-click-prevention-on-double-click.ts

// src/utils/cancellable-promise.ts
var cancellablePromise = (promise)=>{
    let isCanceled = false;
    const wrappedPromise = new Promise((resolve, reject)=>{
        promise.then((value)=>{
            if (isCanceled) {
                reject({
                    isCanceled,
                    value
                });
                return;
            }
            resolve(value);
        }).catch((error)=>{
            reject({
                isCanceled,
                error
            });
        });
    });
    return {
        promise: wrappedPromise,
        cancel: ()=>{
            isCanceled = true;
        }
    };
};
// src/utils/delay.ts
var delay = (n)=>new Promise((resolve)=>setTimeout(resolve, n));
// src/utils/use-cancellable-promises.ts

var useCancellablePromises = ()=>{
    const pendingPromises = (0,react.useRef)([]);
    const appendPendingPromise = (0,react.useCallback)((promise)=>{
        pendingPromises.current = [
            ...pendingPromises.current,
            promise
        ];
    }, []);
    const removePendingPromise = (0,react.useCallback)((promise)=>{
        pendingPromises.current = pendingPromises.current.filter((p)=>p !== promise);
    }, []);
    const clearPendingPromises = (0,react.useCallback)(()=>pendingPromises.current.map((p)=>p.cancel()), []);
    const api = (0,react.useMemo)(()=>({
            appendPendingPromise,
            removePendingPromise,
            clearPendingPromises
        }), [
        appendPendingPromise,
        clearPendingPromises,
        removePendingPromise
    ]);
    return api;
};
// src/utils/use-click-prevention-on-double-click.ts
var useClickPreventionOnDoubleClick = (onClick, onDoubleClick, doubleClickToFullscreen)=>{
    const api = useCancellablePromises();
    const handleClick = (0,react.useCallback)(async (e)=>{
        if (e instanceof PointerEvent ? e.pointerType === "touch" : e.nativeEvent.pointerType === "touch") {
            onClick(e);
            return;
        }
        api.clearPendingPromises();
        const waitForClick = cancellablePromise(delay(200));
        api.appendPendingPromise(waitForClick);
        try {
            await waitForClick.promise;
            api.removePendingPromise(waitForClick);
            onClick(e);
        } catch (errorInfo) {
            const info = errorInfo;
            api.removePendingPromise(waitForClick);
            if (!info.isCanceled) {
                throw info.error;
            }
        }
    }, [
        api,
        onClick
    ]);
    const handlePointerDown = (0,react.useCallback)(()=>{
        document.addEventListener("pointerup", (newEvt)=>{
            handleClick(newEvt);
        }, {
            once: true
        });
    }, [
        handleClick
    ]);
    const handleDoubleClick = (0,react.useCallback)(()=>{
        api.clearPendingPromises();
        onDoubleClick();
    }, [
        api,
        onDoubleClick
    ]);
    const returnValue = (0,react.useMemo)(()=>{
        if (!doubleClickToFullscreen) {
            return {
                handlePointerDown: onClick,
                handleDoubleClick: ()=>{
                    return;
                }
            };
        }
        return {
            handlePointerDown,
            handleDoubleClick
        };
    }, [
        doubleClickToFullscreen,
        handleDoubleClick,
        handlePointerDown,
        onClick
    ]);
    return returnValue;
};
// src/PlayerUI.tsx

var reactVersion = react.version.split(".")[0];
if (reactVersion === "0") {
    throw new Error(`Version ${reactVersion} of "react" is not supported by Remotion`);
}
var doesReactVersionSupportSuspense = parseInt(reactVersion, 10) >= 18;
var PlayerUI = ({ controls, style: style2, loop, autoPlay, allowFullscreen, inputProps, clickToPlay, showVolumeControls, doubleClickToFullscreen, spaceKeyToPlayOrPause, errorFallback, playbackRate, renderLoading, renderPoster, className: className2, moveToBeginningWhenEnded, showPosterWhenUnplayed, showPosterWhenEnded, showPosterWhenPaused, showPosterWhenBuffering, showPosterWhenBufferingAndPaused, inFrame, outFrame, initiallyShowControls, renderFullscreen: renderFullscreenButton, renderPlayPauseButton, renderMuteButton, renderVolumeSlider, renderCustomControls, alwaysShowControls, showPlaybackRateControl, posterFillMode, bufferStateDelayInMilliseconds, hideControlsWhenPointerDoesntMove, overflowVisible, browserMediaControlsBehavior, overrideInternalClassName, noSuspense }, ref)=>{
    const config = esm/* Internals */.Xp.useUnsafeVideoConfig();
    const video = esm/* Internals */.Xp.useVideo();
    const container = (0,react.useRef)(null);
    const canvasSize = useElementSize(container, {
        triggerOnWindowResize: false,
        shouldApplyCssTransforms: false
    });
    const [hasPausedToResume, setHasPausedToResume] = (0,react.useState)(false);
    const [shouldAutoplay, setShouldAutoPlay] = (0,react.useState)(autoPlay);
    const [isFullscreen, setIsFullscreen] = (0,react.useState)(()=>false);
    const [seeking, setSeeking] = (0,react.useState)(false);
    const supportsFullScreen = (0,react.useMemo)(()=>{
        if (typeof document === "undefined") {
            return false;
        }
        return Boolean(document.fullscreenEnabled || document.webkitFullscreenEnabled);
    }, []);
    const player = usePlayer();
    const playerToggle = player.toggle;
    const { playerMuted, mediaVolume } = (0,react.useContext)(esm/* Internals */.Xp.MediaVolumeContext);
    (0,react.useEffect)(()=>{
        player.emitter.dispatchVolumeChange(mediaVolume);
    }, [
        player.emitter,
        mediaVolume
    ]);
    const isMuted = playerMuted || mediaVolume === 0;
    (0,react.useEffect)(()=>{
        player.emitter.dispatchMuteChange({
            isMuted
        });
    }, [
        player.emitter,
        isMuted
    ]);
    usePlayback({
        loop,
        playbackRate,
        moveToBeginningWhenEnded,
        inFrame,
        outFrame,
        getCurrentFrame: player.getCurrentFrame,
        browserMediaControlsBehavior,
        muted: isMuted
    });
    (0,react.useEffect)(()=>{
        if (hasPausedToResume && !player.playing) {
            setHasPausedToResume(false);
            player.play();
        }
    }, [
        hasPausedToResume,
        player
    ]);
    (0,react.useEffect)(()=>{
        const { current } = container;
        if (!current) {
            return;
        }
        const onFullscreenChange = ()=>{
            const newValue = document.fullscreenElement === current || document.webkitFullscreenElement === current;
            setIsFullscreen(newValue);
        };
        document.addEventListener("fullscreenchange", onFullscreenChange);
        document.addEventListener("webkitfullscreenchange", onFullscreenChange);
        return ()=>{
            document.removeEventListener("fullscreenchange", onFullscreenChange);
            document.removeEventListener("webkitfullscreenchange", onFullscreenChange);
        };
    }, []);
    const toggle = (0,react.useCallback)((e)=>{
        playerToggle(e);
    }, [
        playerToggle
    ]);
    const requestFullscreen = (0,react.useCallback)(()=>{
        if (!allowFullscreen) {
            throw new Error("allowFullscreen is false");
        }
        if (!supportsFullScreen) {
            throw new Error("Browser doesnt support fullscreen");
        }
        if (!container.current) {
            throw new Error("No player ref found");
        }
        if (container.current.webkitRequestFullScreen) {
            container.current.webkitRequestFullScreen();
        } else {
            container.current.requestFullscreen();
        }
    }, [
        allowFullscreen,
        supportsFullScreen
    ]);
    const exitFullscreen = (0,react.useCallback)(()=>{
        if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else {
            document.exitFullscreen();
        }
    }, []);
    (0,react.useEffect)(()=>{
        const { current } = container;
        if (!current) {
            return;
        }
        const fullscreenChange = ()=>{
            const element = document.webkitFullscreenElement ?? document.fullscreenElement;
            if (element && element === container.current) {
                player.emitter.dispatchFullscreenChange({
                    isFullscreen: true
                });
            } else {
                player.emitter.dispatchFullscreenChange({
                    isFullscreen: false
                });
            }
        };
        current.addEventListener("webkitfullscreenchange", fullscreenChange);
        current.addEventListener("fullscreenchange", fullscreenChange);
        return ()=>{
            current.removeEventListener("webkitfullscreenchange", fullscreenChange);
            current.removeEventListener("fullscreenchange", fullscreenChange);
        };
    }, [
        player.emitter
    ]);
    const durationInFrames = config?.durationInFrames ?? 1;
    const layout = (0,react.useMemo)(()=>{
        if (!config || !canvasSize) {
            return null;
        }
        return calculateCanvasTransformation({
            canvasSize,
            compositionHeight: config.height,
            compositionWidth: config.width,
            previewSize: "auto"
        });
    }, [
        canvasSize,
        config
    ]);
    const scale = layout?.scale ?? 1;
    const initialScaleIgnored = (0,react.useRef)(false);
    (0,react.useEffect)(()=>{
        if (!initialScaleIgnored.current) {
            initialScaleIgnored.current = true;
            return;
        }
        player.emitter.dispatchScaleChange(scale);
    }, [
        player.emitter,
        scale
    ]);
    const { setMediaVolume, setPlayerMuted } = (0,react.useContext)(esm/* Internals */.Xp.SetMediaVolumeContext);
    const [showBufferIndicator, setShowBufferState] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        let timeout = null;
        let stopped = false;
        const onBuffer = ()=>{
            stopped = false;
            requestAnimationFrame(()=>{
                if (bufferStateDelayInMilliseconds === 0) {
                    setShowBufferState(true);
                } else {
                    timeout = setTimeout(()=>{
                        if (!stopped) {
                            setShowBufferState(true);
                        }
                    }, bufferStateDelayInMilliseconds);
                }
            });
        };
        const onResume = ()=>{
            requestAnimationFrame(()=>{
                stopped = true;
                setShowBufferState(false);
                if (timeout) {
                    clearTimeout(timeout);
                }
            });
        };
        player.emitter.addEventListener("waiting", onBuffer);
        player.emitter.addEventListener("resume", onResume);
        return ()=>{
            player.emitter.removeEventListener("waiting", onBuffer);
            player.emitter.removeEventListener("resume", onResume);
            setShowBufferState(false);
            if (timeout) {
                clearTimeout(timeout);
            }
            stopped = true;
        };
    }, [
        bufferStateDelayInMilliseconds,
        player.emitter
    ]);
    (0,react.useImperativeHandle)(ref, ()=>{
        const methods = {
            play: player.play,
            pause: ()=>{
                setHasPausedToResume(false);
                player.pause();
            },
            toggle,
            getContainerNode: ()=>container.current,
            getCurrentFrame: player.getCurrentFrame,
            isPlaying: player.isPlaying,
            seekTo: (f)=>{
                const lastFrame = durationInFrames - 1;
                const frameToSeekTo = Math.max(0, Math.min(lastFrame, f));
                if (player.isPlaying()) {
                    const pauseToResume = frameToSeekTo !== lastFrame || loop;
                    setHasPausedToResume(pauseToResume);
                    player.pause();
                }
                if (frameToSeekTo === lastFrame && !loop) {
                    player.emitter.dispatchEnded();
                }
                player.seek(frameToSeekTo);
            },
            isFullscreen: ()=>{
                const { current } = container;
                if (!current) {
                    return false;
                }
                return document.fullscreenElement === current || document.webkitFullscreenElement === current;
            },
            requestFullscreen,
            exitFullscreen,
            getVolume: ()=>{
                if (playerMuted) {
                    return 0;
                }
                return mediaVolume;
            },
            setVolume: (vol)=>{
                if (typeof vol !== "number") {
                    throw new TypeError(`setVolume() takes a number, got value of type ${typeof vol}`);
                }
                if (isNaN(vol)) {
                    throw new TypeError(`setVolume() got a number that is NaN. Volume must be between 0 and 1.`);
                }
                if (vol < 0 || vol > 1) {
                    throw new TypeError(`setVolume() got a number that is out of range. Must be between 0 and 1, got ${vol}`);
                }
                setMediaVolume(vol);
            },
            isMuted: ()=>isMuted,
            mute: ()=>{
                setPlayerMuted(true);
            },
            unmute: ()=>{
                setPlayerMuted(false);
            },
            getScale: ()=>scale,
            pauseAndReturnToPlayStart: ()=>{
                player.pauseAndReturnToPlayStart();
            }
        };
        return Object.assign(player.emitter, methods);
    }, [
        durationInFrames,
        exitFullscreen,
        loop,
        playerMuted,
        isMuted,
        mediaVolume,
        player,
        requestFullscreen,
        setPlayerMuted,
        setMediaVolume,
        toggle,
        scale
    ]);
    const VideoComponent = video ? video.component : null;
    const outerStyle = (0,react.useMemo)(()=>{
        return calculateOuterStyle({
            canvasSize,
            config,
            style: style2,
            overflowVisible,
            layout
        });
    }, [
        canvasSize,
        config,
        layout,
        overflowVisible,
        style2
    ]);
    const outer = (0,react.useMemo)(()=>{
        return calculateOuter({
            config,
            layout,
            scale,
            overflowVisible
        });
    }, [
        config,
        layout,
        overflowVisible,
        scale
    ]);
    const containerStyle3 = (0,react.useMemo)(()=>{
        return calculateContainerStyle({
            config,
            layout,
            scale,
            overflowVisible
        });
    }, [
        config,
        layout,
        overflowVisible,
        scale
    ]);
    const playerPause = player.pause;
    const playerDispatchError = player.emitter.dispatchError;
    const onError = (0,react.useCallback)((error)=>{
        playerPause();
        playerDispatchError(error);
    }, [
        playerDispatchError,
        playerPause
    ]);
    const onFullscreenButtonClick = (0,react.useCallback)((e)=>{
        e.stopPropagation();
        requestFullscreen();
    }, [
        requestFullscreen
    ]);
    const onExitFullscreenButtonClick = (0,react.useCallback)((e)=>{
        e.stopPropagation();
        exitFullscreen();
    }, [
        exitFullscreen
    ]);
    const onSingleClick = (0,react.useCallback)((e)=>{
        const rightClick = e instanceof MouseEvent ? e.button === 2 : e.nativeEvent.button;
        if (rightClick) {
            return;
        }
        toggle(e);
    }, [
        toggle
    ]);
    const onSeekStart = (0,react.useCallback)(()=>{
        setSeeking(true);
    }, []);
    const onSeekEnd = (0,react.useCallback)(()=>{
        setSeeking(false);
    }, []);
    const onDoubleClick = (0,react.useCallback)(()=>{
        if (isFullscreen) {
            exitFullscreen();
        } else {
            requestFullscreen();
        }
    }, [
        exitFullscreen,
        isFullscreen,
        requestFullscreen
    ]);
    const { handlePointerDown, handleDoubleClick } = useClickPreventionOnDoubleClick(onSingleClick, onDoubleClick, doubleClickToFullscreen && allowFullscreen && supportsFullScreen);
    (0,react.useEffect)(()=>{
        if (shouldAutoplay) {
            player.play();
            setShouldAutoPlay(false);
        }
    }, [
        shouldAutoplay,
        player
    ]);
    const loadingMarkup = (0,react.useMemo)(()=>{
        return renderLoading ? renderLoading({
            height: outerStyle.height,
            width: outerStyle.width,
            isBuffering: showBufferIndicator
        }) : null;
    }, [
        outerStyle.height,
        outerStyle.width,
        renderLoading,
        showBufferIndicator
    ]);
    const currentScale = (0,react.useMemo)(()=>{
        return {
            type: "scale",
            scale
        };
    }, [
        scale
    ]);
    if (!config) {
        return null;
    }
    const poster = renderPoster ? renderPoster({
        height: posterFillMode === "player-size" ? outerStyle.height : config.height,
        width: posterFillMode === "player-size" ? outerStyle.width : config.width,
        isBuffering: showBufferIndicator
    }) : null;
    if (poster === undefined) {
        throw new TypeError("renderPoster() must return a React element, but undefined was returned");
    }
    const shouldShowPoster = poster && [
        showPosterWhenPaused && !player.isPlaying() && !seeking,
        showPosterWhenEnded && player.isLastFrame && !player.isPlaying(),
        showPosterWhenUnplayed && !player.hasPlayed && !player.isPlaying(),
        showPosterWhenBuffering && showBufferIndicator && player.isPlaying(),
        showPosterWhenBufferingAndPaused && showBufferIndicator && !player.isPlaying()
    ].some(Boolean);
    const { left, top, width, height, ...outerWithoutScale } = outer;
    const content = /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", {
                style: outer,
                onPointerDown: clickToPlay ? handlePointerDown : undefined,
                onDoubleClick: doubleClickToFullscreen ? handleDoubleClick : undefined,
                children: [
                    /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", {
                        style: containerStyle3,
                        className: playerCssClassname(overrideInternalClassName),
                        children: [
                            VideoComponent ? /* @__PURE__ */ (0,jsx_runtime.jsx)(ErrorBoundary, {
                                onError,
                                errorFallback,
                                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(esm/* Internals */.Xp.CurrentScaleContext.Provider, {
                                    value: currentScale,
                                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(VideoComponent, {
                                        ...video?.props ?? {},
                                        ...inputProps ?? {}
                                    })
                                })
                            }) : null,
                            shouldShowPoster && posterFillMode === "composition-size" ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                                style: {
                                    ...outerWithoutScale,
                                    width: config.width,
                                    height: config.height
                                },
                                onPointerDown: clickToPlay ? handlePointerDown : undefined,
                                onDoubleClick: doubleClickToFullscreen ? handleDoubleClick : undefined,
                                children: poster
                            }) : null
                        ]
                    }),
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(RenderWarningIfBlacklist, {})
                ]
            }),
            shouldShowPoster && posterFillMode === "player-size" ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
                style: outer,
                onPointerDown: clickToPlay ? handlePointerDown : undefined,
                onDoubleClick: doubleClickToFullscreen ? handleDoubleClick : undefined,
                children: poster
            }) : null,
            controls ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Controls, {
                fps: config.fps,
                playing: player.playing,
                toggle: player.toggle,
                durationInFrames: config.durationInFrames,
                containerRef: container,
                onFullscreenButtonClick,
                isFullscreen,
                allowFullscreen,
                showVolumeControls,
                onExitFullscreenButtonClick,
                spaceKeyToPlayOrPause,
                onSeekEnd,
                onSeekStart,
                inFrame,
                outFrame,
                initiallyShowControls,
                canvasSize,
                renderFullscreenButton,
                renderPlayPauseButton,
                alwaysShowControls,
                showPlaybackRateControl,
                buffering: showBufferIndicator,
                hideControlsWhenPointerDoesntMove,
                onDoubleClick: doubleClickToFullscreen ? handleDoubleClick : undefined,
                onPointerDown: clickToPlay ? handlePointerDown : undefined,
                renderMuteButton,
                renderVolumeSlider,
                renderCustomControls
            }) : null
        ]
    });
    if (noSuspense || IS_NODE && !doesReactVersionSupportSuspense) {
        return /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
            ref: container,
            style: outerStyle,
            className: className2,
            children: content
        });
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
        ref: container,
        style: outerStyle,
        className: className2,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react.Suspense, {
            fallback: loadingMarkup,
            children: content
        })
    });
};
var PlayerUI_default = /*#__PURE__*/ (0,react.forwardRef)(PlayerUI);
// src/SharedPlayerContext.tsx


// src/volume-persistence.ts

var DEFAULT_VOLUME_PERSISTENCE_KEY = "remotion.volumePreference";
var persistVolume = (volume, logLevel, volumePersistenceKey)=>{
    if (typeof window === "undefined") {
        return;
    }
    try {
        window.localStorage.setItem(volumePersistenceKey ?? DEFAULT_VOLUME_PERSISTENCE_KEY, String(volume));
    } catch (e) {
        esm/* Internals */.Xp.Log.error({
            logLevel,
            tag: null
        }, "Could not persist volume", e);
    }
};
var getPreferredVolume = (volumePersistenceKey)=>{
    if (typeof window === "undefined") {
        return 1;
    }
    try {
        const val = window.localStorage.getItem(volumePersistenceKey ?? DEFAULT_VOLUME_PERSISTENCE_KEY);
        return val ? Number(val) : 1;
    } catch  {
        return 1;
    }
};
// src/SharedPlayerContext.tsx

var PLAYER_COMP_ID = "player-comp";
var SharedPlayerContexts = ({ children, timelineContext, playbackRateContext, fps, compositionHeight, compositionWidth, durationInFrames, component, numberOfSharedAudioTags, initiallyMuted, logLevel, audioLatencyHint, sampleRate, volumePersistenceKey, initialVolume, inputProps, audioEnabled })=>{
    const persistVolumeToStorage = initialVolume === undefined;
    const compositionManagerContext = (0,react.useMemo)(()=>{
        const context = {
            compositions: [
                {
                    component,
                    durationInFrames,
                    height: compositionHeight,
                    width: compositionWidth,
                    fps,
                    id: PLAYER_COMP_ID,
                    nonce: [
                        [
                            0,
                            777
                        ]
                    ],
                    folderName: null,
                    parentFolderName: null,
                    schema: null,
                    calculateMetadata: null,
                    stack: null
                }
            ],
            folders: [],
            currentCompositionMetadata: {
                defaultCodec: null,
                defaultOutName: null,
                defaultPixelFormat: null,
                defaultProResProfile: null,
                defaultSampleRate: null,
                defaultVideoImageFormat: null,
                durationInFrames,
                fps,
                height: compositionHeight,
                width: compositionWidth,
                props: inputProps
            },
            canvasContent: {
                type: "composition",
                compositionId: "player-comp"
            }
        };
        return context;
    }, [
        component,
        durationInFrames,
        compositionHeight,
        compositionWidth,
        fps,
        inputProps
    ]);
    const [playerMuted, setPlayerMuted] = (0,react.useState)(()=>initiallyMuted);
    const [mediaVolume, setMediaVolume] = (0,react.useState)(()=>persistVolumeToStorage ? getPreferredVolume(volumePersistenceKey ?? null) : initialVolume);
    const mediaVolumeContextValue = (0,react.useMemo)(()=>{
        return {
            playerMuted,
            mediaVolume
        };
    }, [
        playerMuted,
        mediaVolume
    ]);
    const shouldCreateAudioContext = audioEnabled && !playerMuted && mediaVolume > 0;
    const setMediaVolumeAndPersist = (0,react.useCallback)((vol)=>{
        setMediaVolume(vol);
        if (persistVolumeToStorage) {
            persistVolume(vol, logLevel, volumePersistenceKey ?? null);
        }
    }, [
        persistVolumeToStorage,
        logLevel,
        volumePersistenceKey
    ]);
    const setMediaVolumeContextValue = (0,react.useMemo)(()=>{
        return {
            setPlayerMuted,
            setMediaVolume: setMediaVolumeAndPersist
        };
    }, [
        setMediaVolumeAndPersist
    ]);
    const logLevelContext = (0,react.useMemo)(()=>{
        return {
            logLevel,
            mountTime: Date.now()
        };
    }, [
        logLevel
    ]);
    const env = (0,react.useMemo)(()=>{
        return {
            isPlayer: true,
            isRendering: false,
            isStudio: false,
            isClientSideRendering: false,
            isReadOnlyStudio: false
        };
    }, []);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(esm/* Internals */.Xp.RemotionEnvironmentContext.Provider, {
        value: env,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(esm/* Internals */.Xp.LogLevelContext.Provider, {
            value: logLevelContext,
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(esm/* Internals */.Xp.CanUseRemotionHooksProvider, {
                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(esm/* Internals */.Xp.AbsoluteTimeContext.Provider, {
                    value: timelineContext,
                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(esm/* Internals */.Xp.PlaybackRateContext.Provider, {
                        value: playbackRateContext,
                        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(esm/* Internals */.Xp.TimelineContext.Provider, {
                            value: timelineContext,
                            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(esm/* Internals */.Xp.CompositionManager.Provider, {
                                value: compositionManagerContext,
                                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(esm/* Internals */.Xp.PrefetchProvider, {
                                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(esm/* Internals */.Xp.DurationsContextProvider, {
                                        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(esm/* Internals */.Xp.MediaVolumeContext.Provider, {
                                            value: mediaVolumeContextValue,
                                            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(esm/* Internals */.Xp.SetMediaVolumeContext.Provider, {
                                                value: setMediaVolumeContextValue,
                                                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(esm/* Internals */.Xp.BufferingProvider, {
                                                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(esm/* Internals */.Xp.SharedAudioContextProvider, {
                                                        audioLatencyHint,
                                                        audioEnabled: shouldCreateAudioContext,
                                                        previewSampleRate: sampleRate,
                                                        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(esm/* Internals */.Xp.SharedAudioTagsContextProvider, {
                                                            numberOfAudioTags: numberOfSharedAudioTags,
                                                            children
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    });
};
// src/use-remotion-license-acknowledge.ts

var warningShown = false;
var acknowledgeRemotionLicenseMessage = (acknowledge, logLevel)=>{
    if (acknowledge) {
        return;
    }
    if (warningShown) {
        return;
    }
    warningShown = true;
    esm/* Internals */.Xp.Log.warn({
        logLevel,
        tag: null
    }, "Note: Some companies are required to obtain a license to use Remotion. See: https://remotion.dev/license\nPass the `acknowledgeRemotionLicense` prop to `<Player />` function to make this message disappear.");
};
// src/utils/validate-in-out-frame.ts
var validateSingleFrame = (frame, variableName)=>{
    if (typeof frame === "undefined" || frame === null) {
        return frame ?? null;
    }
    if (typeof frame !== "number") {
        throw new TypeError(`"${variableName}" must be a number, but is ${JSON.stringify(frame)}`);
    }
    if (Number.isNaN(frame)) {
        throw new TypeError(`"${variableName}" must not be NaN, but is ${JSON.stringify(frame)}`);
    }
    if (!Number.isFinite(frame)) {
        throw new TypeError(`"${variableName}" must be finite, but is ${JSON.stringify(frame)}`);
    }
    if (frame % 1 !== 0) {
        throw new TypeError(`"${variableName}" must be an integer, but is ${JSON.stringify(frame)}`);
    }
    return frame;
};
var validateInOutFrames = ({ inFrame, durationInFrames, outFrame })=>{
    const validatedInFrame = validateSingleFrame(inFrame, "inFrame");
    const validatedOutFrame = validateSingleFrame(outFrame, "outFrame");
    if (validatedInFrame === null && validatedOutFrame === null) {
        return;
    }
    if (validatedInFrame !== null && validatedInFrame > durationInFrames - 1) {
        throw new Error("inFrame must be less than (durationInFrames - 1), but is " + validatedInFrame);
    }
    if (validatedOutFrame !== null && validatedOutFrame > durationInFrames - 1) {
        throw new Error("outFrame must be less than (durationInFrames - 1), but is " + validatedOutFrame);
    }
    if (validatedInFrame !== null && validatedInFrame < 0) {
        throw new Error("inFrame must be greater than 0, but is " + validatedInFrame);
    }
    if (validatedOutFrame !== null && validatedOutFrame <= 0) {
        throw new Error(`outFrame must be greater than 0, but is ${validatedOutFrame}. If you want to render a single frame, use <Thumbnail /> instead.`);
    }
    if (validatedOutFrame !== null && validatedInFrame !== null && validatedOutFrame <= validatedInFrame) {
        throw new Error("outFrame must be greater than inFrame, but is " + validatedOutFrame + " <= " + validatedInFrame);
    }
};
// src/utils/validate-initial-frame.ts
var validateInitialFrame = ({ initialFrame, durationInFrames })=>{
    if (typeof durationInFrames !== "number") {
        throw new Error(`\`durationInFrames\` must be a number, but is ${JSON.stringify(durationInFrames)}`);
    }
    if (typeof initialFrame === "undefined") {
        return;
    }
    if (typeof initialFrame !== "number") {
        throw new Error(`\`initialFrame\` must be a number, but is ${JSON.stringify(initialFrame)}`);
    }
    if (Number.isNaN(initialFrame)) {
        throw new Error(`\`initialFrame\` must be a number, but is NaN`);
    }
    if (!Number.isFinite(initialFrame)) {
        throw new Error(`\`initialFrame\` must be a number, but is Infinity`);
    }
    if (initialFrame % 1 !== 0) {
        throw new Error(`\`initialFrame\` must be an integer, but is ${JSON.stringify(initialFrame)}`);
    }
    if (initialFrame > durationInFrames - 1) {
        throw new Error(`\`initialFrame\` must be less or equal than \`durationInFrames - 1\`, but is ${JSON.stringify(initialFrame)}`);
    }
};
// src/utils/validate-playbackrate.ts
var validatePlaybackRate = (playbackRate)=>{
    if (playbackRate === undefined) {
        return;
    }
    if (playbackRate > 10) {
        throw new Error(`The highest possible playback rate is 10. You passed: ${playbackRate}`);
    }
    if (playbackRate < -10) {
        throw new Error(`The lowest possible playback rate is -10. You passed: ${playbackRate}`);
    }
    if (playbackRate === 0) {
        throw new Error(`A playback rate of 0 is not supported.`);
    }
};
// src/validate.ts

var esm_validateFps = NoReactInternals.validateFps;
var esm_validateDimension = NoReactInternals.validateDimension;
var esm_validateDurationInFrames = NoReactInternals.validateDurationInFrames;
var esm_validateDefaultAndInputProps = NoReactInternals.validateDefaultAndInputProps;
// src/Player.tsx

var componentOrNullIfLazy = (props)=>{
    if ("component" in props) {
        return props.component;
    }
    return null;
};
var PlayerFn = ({ durationInFrames, compositionHeight, compositionWidth, fps, inputProps, style: style2, controls = false, loop = false, autoPlay = false, showVolumeControls = true, allowFullscreen = true, clickToPlay, doubleClickToFullscreen = false, spaceKeyToPlayOrPause = true, moveToBeginningWhenEnded = true, numberOfSharedAudioTags = 5, errorFallback = ()=>"⚠️", playbackRate = 1, renderLoading, className: className2, showPosterWhenUnplayed, showPosterWhenEnded, showPosterWhenPaused, showPosterWhenBuffering, showPosterWhenBufferingAndPaused, initialFrame, renderPoster, inFrame, outFrame, initiallyShowControls, renderFullscreenButton, renderPlayPauseButton, renderVolumeSlider, renderCustomControls, alwaysShowControls = false, initiallyMuted = false, showPlaybackRateControl = false, posterFillMode = "player-size", bufferStateDelayInMilliseconds, hideControlsWhenPointerDoesntMove = true, overflowVisible = false, renderMuteButton, browserMediaControlsBehavior: passedBrowserMediaControlsBehavior, overrideInternalClassName, logLevel = "info", noSuspense, acknowledgeRemotionLicense, audioLatencyHint = "playback", sampleRate = 48000, volumePersistenceKey, initialVolume, ...componentProps }, ref)=>{
    if (typeof window !== "undefined") {
        window.remotion_isPlayer = true;
    }
    if (componentProps.defaultProps !== undefined) {
        throw new Error("The <Player /> component does not accept `defaultProps`, but some were passed. Use `inputProps` instead.");
    }
    const componentForValidation = componentOrNullIfLazy(componentProps);
    if (componentForValidation?.type === esm/* Composition */.BO) {
        throw new TypeError(`'component' should not be an instance of <Composition/>. Pass the React component directly, and set the duration, fps and dimensions as separate props. See https://www.remotion.dev/docs/player/examples for an example.`);
    }
    if (componentForValidation === esm/* Composition */.BO) {
        throw new TypeError(`'component' must not be the 'Composition' component. Pass your own React component directly, and set the duration, fps and dimensions as separate props. See https://www.remotion.dev/docs/player/examples for an example.`);
    }
    (0,react.useState)(()=>acknowledgeRemotionLicenseMessage(Boolean(acknowledgeRemotionLicense), logLevel));
    const component = esm/* Internals */.Xp.useLazyComponent({
        compProps: componentProps,
        componentName: "Player",
        noSuspense: Boolean(noSuspense)
    });
    validateInitialFrame({
        initialFrame,
        durationInFrames
    });
    const [frame, setFrame] = (0,react.useState)(()=>({
            [PLAYER_COMP_ID]: initialFrame ?? 0
        }));
    const [playing, setPlaying] = (0,react.useState)(false);
    const [rootId] = (0,react.useState)("player-comp");
    const rootRef = (0,react.useRef)(null);
    const audioAndVideoTags = (0,react.useRef)([]);
    const imperativePlaying = (0,react.useRef)(false);
    const [currentPlaybackRate, setCurrentPlaybackRate] = (0,react.useState)(playbackRate);
    if (typeof compositionHeight !== "number") {
        throw new TypeError(`'compositionHeight' must be a number but got '${typeof compositionHeight}' instead`);
    }
    if (typeof compositionWidth !== "number") {
        throw new TypeError(`'compositionWidth' must be a number but got '${typeof compositionWidth}' instead`);
    }
    esm_validateDimension(compositionHeight, "compositionHeight", "of the <Player /> component");
    esm_validateDimension(compositionWidth, "compositionWidth", "of the <Player /> component");
    esm_validateDurationInFrames(durationInFrames, {
        component: "of the <Player/> component",
        allowFloats: false
    });
    esm_validateFps(fps, "as a prop of the <Player/> component", false);
    esm_validateDefaultAndInputProps(inputProps, "inputProps", null);
    validateInOutFrames({
        durationInFrames,
        inFrame,
        outFrame
    });
    if (typeof controls !== "boolean" && typeof controls !== "undefined") {
        throw new TypeError(`'controls' must be a boolean or undefined but got '${typeof controls}' instead`);
    }
    if (typeof autoPlay !== "boolean" && typeof autoPlay !== "undefined") {
        throw new TypeError(`'autoPlay' must be a boolean or undefined but got '${typeof autoPlay}' instead`);
    }
    if (typeof loop !== "boolean" && typeof loop !== "undefined") {
        throw new TypeError(`'loop' must be a boolean or undefined but got '${typeof loop}' instead`);
    }
    if (typeof doubleClickToFullscreen !== "boolean" && typeof doubleClickToFullscreen !== "undefined") {
        throw new TypeError(`'doubleClickToFullscreen' must be a boolean or undefined but got '${typeof doubleClickToFullscreen}' instead`);
    }
    if (typeof showVolumeControls !== "boolean" && typeof showVolumeControls !== "undefined") {
        throw new TypeError(`'showVolumeControls' must be a boolean or undefined but got '${typeof showVolumeControls}' instead`);
    }
    if (typeof allowFullscreen !== "boolean" && typeof allowFullscreen !== "undefined") {
        throw new TypeError(`'allowFullscreen' must be a boolean or undefined but got '${typeof allowFullscreen}' instead`);
    }
    if (typeof clickToPlay !== "boolean" && typeof clickToPlay !== "undefined") {
        throw new TypeError(`'clickToPlay' must be a boolean or undefined but got '${typeof clickToPlay}' instead`);
    }
    if (typeof spaceKeyToPlayOrPause !== "boolean" && typeof spaceKeyToPlayOrPause !== "undefined") {
        throw new TypeError(`'spaceKeyToPlayOrPause' must be a boolean or undefined but got '${typeof spaceKeyToPlayOrPause}' instead`);
    }
    if (typeof sampleRate !== "number" || !Number.isFinite(sampleRate) || Number.isNaN(sampleRate) || sampleRate <= 0 || sampleRate % 1 !== 0) {
        throw new TypeError(`'sampleRate' must be a positive integer but got '${sampleRate}' instead`);
    }
    if (typeof initialVolume !== "undefined" && typeof initialVolume !== "number") {
        throw new TypeError(`'initialVolume' must be a number or undefined but got '${typeof initialVolume}' instead`);
    }
    if (typeof initialVolume === "number" && (!Number.isFinite(initialVolume) || Number.isNaN(initialVolume) || initialVolume < 0 || initialVolume > 1)) {
        throw new TypeError(`'initialVolume' must be between 0 and 1 but got '${initialVolume}' instead`);
    }
    if (typeof numberOfSharedAudioTags !== "number" || numberOfSharedAudioTags % 1 !== 0 || !Number.isFinite(numberOfSharedAudioTags) || Number.isNaN(numberOfSharedAudioTags) || numberOfSharedAudioTags < 0) {
        throw new TypeError(`'numberOfSharedAudioTags' must be an integer but got '${numberOfSharedAudioTags}' instead`);
    }
    validatePlaybackRate(currentPlaybackRate);
    (0,react.useEffect)(()=>{
        setCurrentPlaybackRate(playbackRate);
    }, [
        playbackRate
    ]);
    (0,react.useImperativeHandle)(ref, ()=>rootRef.current, []);
    (0,react.useState)(()=>{
        esm/* Internals */.Xp.playbackLogging({
            logLevel,
            message: `[player] Mounting <Player>. User agent = ${typeof navigator === "undefined" ? "server" : navigator.userAgent}`,
            tag: "player",
            mountTime: Date.now()
        });
    });
    const timelineContextValue = (0,react.useMemo)(()=>{
        return {
            frame,
            playing,
            rootId,
            imperativePlaying,
            audioAndVideoTags
        };
    }, [
        frame,
        playing,
        rootId
    ]);
    const playbackRateContextValue = (0,react.useMemo)(()=>{
        return {
            playbackRate: currentPlaybackRate,
            setPlaybackRate: setCurrentPlaybackRate
        };
    }, [
        currentPlaybackRate
    ]);
    const setTimelineContextValue = (0,react.useMemo)(()=>{
        return {
            setFrame,
            setPlaying
        };
    }, [
        setFrame
    ]);
    if (typeof window !== "undefined") {
        (0,react.useLayoutEffect)(()=>{
            esm/* Internals */.Xp.CSSUtils.injectCSS(esm/* Internals */.Xp.CSSUtils.makeDefaultPreviewCSS(`.${playerCssClassname(overrideInternalClassName)}`, "#fff"));
        }, [
            overrideInternalClassName
        ]);
    }
    const actualInputProps = (0,react.useMemo)(()=>inputProps ?? {}, [
        inputProps
    ]);
    const browserMediaControlsBehavior = (0,react.useMemo)(()=>{
        return passedBrowserMediaControlsBehavior ?? {
            mode: "prevent-media-session"
        };
    }, [
        passedBrowserMediaControlsBehavior
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(esm/* Internals */.Xp.IsPlayerContextProvider, {
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(SharedPlayerContexts, {
            timelineContext: timelineContextValue,
            playbackRateContext: playbackRateContextValue,
            component,
            compositionHeight,
            compositionWidth,
            durationInFrames,
            fps,
            numberOfSharedAudioTags,
            initiallyMuted,
            logLevel,
            audioLatencyHint,
            sampleRate,
            volumePersistenceKey,
            initialVolume,
            inputProps: actualInputProps,
            audioEnabled: true,
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(esm/* Internals */.Xp.SetTimelineContext.Provider, {
                value: setTimelineContextValue,
                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(PlayerEmitterProvider, {
                    currentPlaybackRate,
                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(PlayerUI_default, {
                        ref: rootRef,
                        posterFillMode,
                        renderLoading,
                        autoPlay: Boolean(autoPlay),
                        loop: Boolean(loop),
                        controls: Boolean(controls),
                        errorFallback,
                        style: style2,
                        inputProps: actualInputProps,
                        allowFullscreen: Boolean(allowFullscreen),
                        moveToBeginningWhenEnded: Boolean(moveToBeginningWhenEnded),
                        clickToPlay: typeof clickToPlay === "boolean" ? clickToPlay : Boolean(controls),
                        showVolumeControls: Boolean(showVolumeControls),
                        doubleClickToFullscreen: Boolean(doubleClickToFullscreen),
                        spaceKeyToPlayOrPause: Boolean(spaceKeyToPlayOrPause),
                        playbackRate: currentPlaybackRate,
                        className: className2 ?? undefined,
                        showPosterWhenUnplayed: Boolean(showPosterWhenUnplayed),
                        showPosterWhenEnded: Boolean(showPosterWhenEnded),
                        showPosterWhenPaused: Boolean(showPosterWhenPaused),
                        showPosterWhenBuffering: Boolean(showPosterWhenBuffering),
                        showPosterWhenBufferingAndPaused: Boolean(showPosterWhenBufferingAndPaused),
                        renderPoster,
                        inFrame: inFrame ?? null,
                        outFrame: outFrame ?? null,
                        initiallyShowControls: initiallyShowControls ?? true,
                        renderFullscreen: renderFullscreenButton ?? null,
                        renderPlayPauseButton: renderPlayPauseButton ?? null,
                        renderMuteButton: renderMuteButton ?? null,
                        renderVolumeSlider: renderVolumeSlider ?? null,
                        renderCustomControls: renderCustomControls ?? null,
                        alwaysShowControls,
                        showPlaybackRateControl,
                        bufferStateDelayInMilliseconds: bufferStateDelayInMilliseconds ?? 300,
                        hideControlsWhenPointerDoesntMove,
                        overflowVisible,
                        browserMediaControlsBehavior,
                        overrideInternalClassName: overrideInternalClassName ?? undefined,
                        noSuspense: Boolean(noSuspense)
                    })
                })
            })
        })
    });
};
var forward = react.forwardRef;
var Player = forward(PlayerFn);
// src/Thumbnail.tsx


// src/ThumbnailUI.tsx


// src/use-thumbnail.ts

var useThumbnail = ()=>{
    const emitter = (0,react.useContext)(ThumbnailEmitterContext);
    if (!emitter) {
        throw new TypeError("Expected Player event emitter context");
    }
    const returnValue = (0,react.useMemo)(()=>{
        return {
            emitter
        };
    }, [
        emitter
    ]);
    return returnValue;
};
// src/ThumbnailUI.tsx

var reactVersion2 = react.version.split(".")[0];
if (reactVersion2 === "0") {
    throw new Error(`Version ${reactVersion2} of "react" is not supported by Remotion`);
}
var doesReactVersionSupportSuspense2 = parseInt(reactVersion2, 10) >= 18;
var ThumbnailUI = ({ style: style2, inputProps, errorFallback, renderLoading, className: className2, overflowVisible, noSuspense, overrideInternalClassName }, ref)=>{
    const config = esm/* Internals */.Xp.useUnsafeVideoConfig();
    const video = esm/* Internals */.Xp.useVideo();
    const container = (0,react.useRef)(null);
    const canvasSize = useElementSize(container, {
        triggerOnWindowResize: false,
        shouldApplyCssTransforms: false
    });
    const layout = (0,react.useMemo)(()=>{
        if (!config || !canvasSize) {
            return null;
        }
        return calculateCanvasTransformation({
            canvasSize,
            compositionHeight: config.height,
            compositionWidth: config.width,
            previewSize: "auto"
        });
    }, [
        canvasSize,
        config
    ]);
    const scale = layout?.scale ?? 1;
    const thumbnail = useThumbnail();
    useBufferStateEmitter(thumbnail.emitter);
    (0,react.useImperativeHandle)(ref, ()=>{
        const methods = {
            getContainerNode: ()=>container.current,
            getScale: ()=>scale
        };
        return Object.assign(thumbnail.emitter, methods);
    }, [
        scale,
        thumbnail.emitter
    ]);
    const VideoComponent = video ? video.component : null;
    const outerStyle = (0,react.useMemo)(()=>{
        return calculateOuterStyle({
            config,
            style: style2,
            canvasSize,
            overflowVisible,
            layout
        });
    }, [
        canvasSize,
        config,
        layout,
        overflowVisible,
        style2
    ]);
    const outer = (0,react.useMemo)(()=>{
        return calculateOuter({
            config,
            layout,
            scale,
            overflowVisible
        });
    }, [
        config,
        layout,
        overflowVisible,
        scale
    ]);
    const containerStyle3 = (0,react.useMemo)(()=>{
        return calculateContainerStyle({
            config,
            layout,
            scale,
            overflowVisible
        });
    }, [
        config,
        layout,
        overflowVisible,
        scale
    ]);
    const onError = (0,react.useCallback)((error)=>{
        thumbnail.emitter.dispatchError(error);
    }, [
        thumbnail.emitter
    ]);
    const loadingMarkup = (0,react.useMemo)(()=>{
        return renderLoading ? renderLoading({
            height: outerStyle.height,
            width: outerStyle.width,
            isBuffering: false
        }) : null;
    }, [
        outerStyle.height,
        outerStyle.width,
        renderLoading
    ]);
    const currentScaleContext = (0,react.useMemo)(()=>{
        return {
            type: "scale",
            scale
        };
    }, [
        scale
    ]);
    if (!config) {
        return null;
    }
    const content = /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
        style: outer,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
            style: containerStyle3,
            className: playerCssClassname(overrideInternalClassName),
            children: VideoComponent ? /* @__PURE__ */ (0,jsx_runtime.jsx)(ErrorBoundary, {
                onError,
                errorFallback,
                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(esm/* Internals */.Xp.CurrentScaleContext.Provider, {
                    value: currentScaleContext,
                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(VideoComponent, {
                        ...video?.props ?? {},
                        ...inputProps ?? {}
                    })
                })
            }) : null
        })
    });
    if (noSuspense || IS_NODE && !doesReactVersionSupportSuspense2) {
        return /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
            ref: container,
            style: outerStyle,
            className: className2,
            children: content
        });
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
        ref: container,
        style: outerStyle,
        className: className2,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react.Suspense, {
            fallback: loadingMarkup,
            children: content
        })
    });
};
var ThumbnailUI_default = /*#__PURE__*/ (0,react.forwardRef)(ThumbnailUI);
// src/Thumbnail.tsx

var ThumbnailFn = ({ frameToDisplay, style: style2, inputProps, compositionHeight, compositionWidth, durationInFrames, fps, className: className2, errorFallback = ()=>"⚠️", renderLoading, overflowVisible = false, overrideInternalClassName, logLevel = "info", noSuspense, ...componentProps }, ref)=>{
    if (typeof window !== "undefined") {
        (0,react.useLayoutEffect)(()=>{
            window.remotion_isPlayer = true;
        }, []);
    }
    const [thumbnailId] = (0,react.useState)(()=>String((0,esm/* random */.yT)(null)));
    const rootRef = (0,react.useRef)(null);
    const timelineState = (0,react.useMemo)(()=>{
        const value = {
            playing: false,
            frame: {
                [PLAYER_COMP_ID]: frameToDisplay
            },
            rootId: thumbnailId,
            imperativePlaying: {
                current: false
            },
            audioAndVideoTags: {
                current: []
            }
        };
        return value;
    }, [
        frameToDisplay,
        thumbnailId
    ]);
    const playbackRateContext = (0,react.useMemo)(()=>{
        return {
            playbackRate: 1,
            setPlaybackRate: ()=>{
                throw new Error("thumbnail");
            }
        };
    }, []);
    (0,react.useImperativeHandle)(ref, ()=>rootRef.current, []);
    const Component = esm/* Internals */.Xp.useLazyComponent({
        compProps: componentProps,
        componentName: "Thumbnail",
        noSuspense: Boolean(noSuspense)
    });
    const [emitter] = (0,react.useState)(()=>new ThumbnailEmitter);
    const passedInputProps = (0,react.useMemo)(()=>{
        return inputProps ?? {};
    }, [
        inputProps
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(esm/* Internals */.Xp.IsPlayerContextProvider, {
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(SharedPlayerContexts, {
            timelineContext: timelineState,
            playbackRateContext,
            component: Component,
            compositionHeight,
            compositionWidth,
            durationInFrames,
            fps,
            numberOfSharedAudioTags: 0,
            initiallyMuted: true,
            logLevel,
            audioLatencyHint: "playback",
            sampleRate: 48000,
            inputProps: passedInputProps,
            audioEnabled: false,
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ThumbnailEmitterContext.Provider, {
                value: emitter,
                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ThumbnailUI_default, {
                    ref: rootRef,
                    className: className2,
                    errorFallback,
                    inputProps: passedInputProps,
                    renderLoading,
                    style: style2,
                    overflowVisible,
                    overrideInternalClassName,
                    noSuspense: Boolean(noSuspense)
                })
            })
        })
    });
};
var forward2 = react.forwardRef;
var Thumbnail = forward2(ThumbnailFn);
// src/index.ts
var PlayerInternals = {
    PlayerEventEmitterContext,
    PlayerEmitter,
    usePlayer,
    usePlayback,
    useElementSize,
    calculateCanvasTransformation,
    useHoverState,
    updateAllElementsSizes,
    PlayerEmitterProvider,
    BufferingIndicator
};



/***/ })

}]);