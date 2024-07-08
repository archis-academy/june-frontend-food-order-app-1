/*     Most Type of Dınner Start      */
(function ($) {
  $.widget("ui.radialMultiProgress", {
      version: "1.0.0",
      options: {
          thickness: 10,
          "font-size": 12,
          "base-color": "#333",
          space: 1,
          antiAlias: false,
          scaleLabel: false,
          centerContent: "",
          responsive: false,
          innerFullCircle: false,
          data: []
      },
      _create: function () {
          this._render();
      },
      _createCircle: function (
          svgNS,
          cx,
          cy,
          r,
          fill,
          stroke,
          strokeWidth,
          transform,
          dashArray,
          dashOffset,
          animation
      ) {
          const circle = document.createElementNS(svgNS, "circle");
          circle.setAttribute("cx", cx);
          circle.setAttribute("cy", cy);
          circle.setAttribute("r", r);
          circle.setAttribute("fill", fill);
          circle.setAttribute("stroke", stroke);
          circle.setAttribute("stroke-width", strokeWidth);
          if (transform) {
              circle.setAttribute("transform", transform);
          }
          if (dashArray) {
              circle.setAttribute("stroke-dasharray", dashArray);
              circle.setAttribute("stroke-dashoffset", dashOffset);
              if (animation) {
                  circle.style.transition = `stroke-dashoffset ${animation.duration} ${animation.style}`;
              }
          }
          return circle;
      },
      _render: function () {
          const svgNS = "http://www.w3.org/2000/svg";
          let currentRadius = 50 - this.options.thickness;
          this.element.css("position", "relative");

          const svg = document.createElementNS(svgNS, "svg");
          const svgAttributes = {
              width: "100%",
              height: "100%",
              viewBox: "0 0 100 100"
          };
          if (this.options.antiAlias)
              svgAttributes["shape-rendering"] = "geometricPrecision";
          if (this.options.responsive)
              svgAttributes["preserveAspectRatio"] = "xMidYMid meet";
          for (let attr in svgAttributes) {
              svg.setAttribute(attr, svgAttributes[attr]);
          }

          this.options.data.forEach((data, index) => {
              if (
                  this.options.innerFullCircle &&
                  index === this.options.data.length - 1
              ) {
                  const innerCircleRadius = currentRadius;

                  const backgroundCircle = this._createCircle(
                      svgNS,
                      "50",
                      "50",
                      innerCircleRadius.toString(),
                      this.options["base-color"],
                      "none",
                      "0"
                  );
                  svg.appendChild(backgroundCircle);

                  const rangeSpan = data.range[1] - data.range[0];
                  const completionPercentage =
                      ((data.value - data.range[0]) / rangeSpan) * 100;
                  const totalSpace =
                      (this.options.data.length - (index + 1)) * this.options.space;
                  const adjustedInnerCircleRadius = innerCircleRadius + totalSpace;
                  const maskFillRectY =
                      50 -
                      adjustedInnerCircleRadius +
                      2 * adjustedInnerCircleRadius * (1 - completionPercentage / 100);

                  const mask = document.createElementNS(svgNS, "mask");
                  const maskid = $(mask).uniqueId();
                  const maskRect = document.createElementNS(svgNS, "rect");
                  const maskFillRect = document.createElementNS(svgNS, "rect");

                  const maskAttributes = [
                      {
                          element: maskRect,
                          attributes: {
                              x: 0,
                              y: 50 - innerCircleRadius,
                              width: 100,
                              height: 2 * innerCircleRadius,
                              fill: "black"
                          }
                      },
                      {
                          element: maskFillRect,
                          attributes: {
                              y: maskFillRectY,
                              x: 0,
                              width: 100,
                              height: 2 * innerCircleRadius * (completionPercentage / 100),
                              fill: "white"
                          }
                      }
                  ];

                  maskAttributes.forEach((item) => {
                      for (let attr in item.attributes) {
                          item.element.setAttribute(attr, item.attributes[attr]);
                      }
                      mask.appendChild(item.element);
                  });

                  svg.appendChild(mask);

                  const foregroundCircle = this._createCircle(
                      svgNS,
                      "50",
                      "50",
                      innerCircleRadius.toString(),
                      data.color,
                      "none",
                      "0"
                  );
                  foregroundCircle.setAttribute(
                      "mask",
                      "url(#" + $(maskid).attr("id") + ")"
                  );
                  svg.appendChild(foregroundCircle);

                  currentRadius -= this.options.thickness + this.options.space;
              } else {
                  const rangeSpan = data.range[1] - data.range[0];
                  const completionPercentage = (data.range[1] - data.value) / rangeSpan;
                  const strokeDasharray = 2 * Math.PI * currentRadius;
                  const rotationVal = (data.startAngle || 0) - 90;
                  const strokeDashoffset = strokeDasharray * completionPercentage;

                  const backgroundCircle = this._createCircle(
                      svgNS,
                      "50",
                      "50",
                      currentRadius.toString(),
                      "none",
                      this.options["base-color"],
                      this.options.thickness.toString(),
                      `rotate(${rotationVal} 50 50)`
                  );
                  svg.appendChild(backgroundCircle);

                  const foregroundCircle = this._createCircle(
                      svgNS,
                      "50",
                      "50",
                      currentRadius.toString(),
                      "none",
                      data.color,
                      this.options.thickness.toString(),
                      `rotate(${rotationVal} 50 50)`,
                      strokeDasharray,
                      strokeDashoffset,
                      data.animation
                  );
                  svg.appendChild(foregroundCircle);

                  currentRadius -= this.options.thickness + this.options.space;
              }
          });

          this.element.append(svg);
      },
      updateValue: function (identifier, newValue) {
          const index =
              typeof identifier === "number"
                  ? identifier
                  : this.options.data.findIndex((item) => item.id === identifier);

          if (index !== -1) {
              const data = this.options.data[index];
              data.value = newValue;

              const rangeSpan = data.range[1] - data.range[0];
              const completionPercentage = (data.value - data.range[0]) / rangeSpan;
              const completionPercentageForInner = completionPercentage * 100;

              // Calculate the innerCircleRadius
              let innerCircleRadius = 50 - this.options.thickness;  // initial value

              // Reduce the innerCircleRadius for each preceding circle
              for (let i = 0; i < this.options.data.length - 1; i++) {
                  innerCircleRadius -= this.options.thickness + this.options.space;
              }

              if (this.options.innerFullCircle && index === this.options.data.length - 1) {
                  const maskFillRectY = 50 - innerCircleRadius + (2 * innerCircleRadius * (1 - completionPercentageForInner / 100));

                  const mask = $(this.element).find("svg > mask")[0];
                  const maskFillRect = $(mask).find("rect")[1];
                  if (data.animation) {
                      $(maskFillRect).css(
                          "transition",
                          `y ${data.animation.duration} ${data.animation.style}, height ${data.animation.duration} ${data.animation.style}`
                      );
                  } else {
                      $(maskFillRect).css("transition", "");
                  }
                  maskFillRect.setAttribute("y", maskFillRectY);
                  maskFillRect.setAttribute("height", 2 * innerCircleRadius * (completionPercentageForInner / 100));
              } else {
                  const currentRadius =
                      50 -
                      this.options.thickness * (index + 1) -
                      this.options.space * index;
                  const strokeDasharray = 2 * Math.PI * currentRadius;
                  const newStrokeDashoffset =
                      strokeDasharray * (1 - completionPercentage);

                  const circle = $(this.element).find("svg > circle")[index * 2 + 1];
                  $(circle).attr("stroke-dashoffset", newStrokeDashoffset);

                  if (data.animation) {
                      $(circle).css(
                          "transition",
                          `stroke-dashoffset ${data.animation.duration} ${data.animation.style}`
                      );
                  }
              }
          }
      },
      setAnimation: function (identifier, animationAttributes) {
          const index =
              typeof identifier === "number"
                  ? identifier
                  : this.options.data.findIndex((item) => item.id === identifier);

          if (index !== -1) {
              const data = this.options.data[index];
              data.animation = animationAttributes;

              const circleElements = this.element.find("svg > circle");
              if (circleElements.length > index * 2 + 1) {
                  const circle = circleElements[index * 2 + 1];
                  if (data.animation) {
                      circle.style.transition = `stroke-dashoffset ${data.animation.duration} ${data.animation.style}`;
                  }
              }
          }
      },
      _destroy: function () {
          this.element.empty();
      },
      getValue: function (identifier) {
          const index =
              typeof identifier === "number"
                  ? identifier
                  : this.options.data.findIndex((item) => item.id === identifier);

          if (index !== -1) {
              return this.options.data[index].value;
          }
          return null;
      },
      getOption: function (optionKey) {
          return this.options[optionKey];
      },
      setOption: function (optionKey, value) {
          this.options[optionKey] = value;
          this._render();
      }
  });
})(jQuery);

$(document).ready(function () {
  const todayData = [
      {
          id: "progress1",
          value: 65,
          range: [0, 100],
          color: "rgba(101, 176, 246, 1)",
          animation: {
              duration: "1s",
              style: "ease"
          }
      },
      {
          id: "progress2",
          value: 45,
          range: [0, 100],
          color: "rgba(255, 181, 114, 1)",
          animation: {
              duration: "1s",
              style: "ease"
          }
      },
      {
          id: "progress3",
          value: 55,
          range: [0, 100],
          color: "rgba(255, 124, 163, 1)",
          animation: {
              duration: "1s",
              style: "ease"
          }
      },
      {
          id: "progress4",
          value: 0,
          range: [0, 100],
          color: "#333",
          animation: {
              duration: "1s",
              style: "ease"
          }
      },
      {
          id: "progress5",
          value: 0,
          range: [0, 100],
          color: "#333",
          animation: {
              duration: "1s",
              style: "ease"
          }
      },
      {
          id: "progress6",
          value: 0,
          range: [0, 100],
          color: "#333",
          animation: {
              duration: "1s",
              style: "ease"
          }
      },
      {
          id: "progress7",
          value: 0,
          range: [0, 100],
          color: "#333",
          animation: {
              duration: "1s",
              style: "ease"
          }
      }
  ];

  const thisWeekData = [
      {
          id: "progress1",
          value: 35,
          range: [0, 100],
          color: "rgba(101, 176, 246, 1)",
          animation: {
              duration: "1s",
              style: "ease"
          }
      },
      {
          id: "progress2",
          value: 65,
          range: [0, 100],
          color: "rgba(255, 181, 114, 1)",
          animation: {
              duration: "1s",
              style: "ease"
          }
      },
      {
          id: "progress3",
          value: 75,
          range: [0, 100],
          color: "rgba(255, 124, 163, 1)",
          animation: {
              duration: "1s",
              style: "ease"
          }
      },
      {
          id: "progress4",
          value: 0,
          range: [0, 100],
          color: "#333",
          animation: {
              duration: "1s",
              style: "ease"
          }
      },
      {
          id: "progress5",
          value: 0,
          range: [0, 100],
          color: "#333",
          animation: {
              duration: "1s",
              style: "ease"
          }
      },
      {
          id: "progress6",
          value: 0,
          range: [0, 100],
          color: "#333",
          animation: {
              duration: "1s",
              style: "ease"
          }
      },
      {
          id: "progress7",
          value: 0,
          range: [0, 100],
          color: "#333",
          animation: {
              duration: "1s",
              style: "ease"
          }
      }
  ];

  const thisMonthData = [
      {
          id: "progress1",
          value: 45,
          range: [0, 100],
          color: "rgba(101, 176, 246, 1)",
          animation: {
              duration: "1s",
              style: "ease"
          }
      },
      {
          id: "progress2",
          value: 55,
          range: [0, 100],
          color: "rgba(255, 181, 114, 1)",
          animation: {
              duration: "1s",
              style: "ease"
          }
      },
      {
          id: "progress3",
          value: 85,
          range: [0, 100],
          color: "rgba(255, 124, 163, 1)",
          animation: {
              duration: "1s",
              style: "ease"
          }
      },
      {
          id: "progress4",
          value: 0,
          range: [0, 100],
          color: "#333",
          animation: {
              duration: "1s",
              style: "ease"
          }
      },
      {
          id: "progress5",
          value: 0,
          range: [0, 100],
          color: "#333",
          animation: {
              duration: "1s",
              style: "ease"
          }
      },
      {
          id: "progress6",
          value: 0,
          range: [0, 100],
          color: "#333",
          animation: {
              duration: "1s",
              style: "ease"
          }
      },
      {
          id: "progress7",
          value: 0,
          range: [0, 100],
          color: "#333",
          animation: {
              duration: "1s",
              style: "ease"
          }
      }
  ];

  const $progressContainer = $("#progress-container");

  $("#progress-container").radialMultiProgress({
      thickness: 8,
      "font-size": 10,
      "base-color": "#333",
      space: 1,
      antiAlias: false,
      scaleLabel: false,
      centerContent: "",
      responsive: true,
      innerFullCircle: true,
      data: todayData
  });

  $(".mto__fitler").change(function () {
      const selectedValue = $(this).val();

      switch (selectedValue) {
          case "1":
              $progressContainer.radialMultiProgress("setOption", "data", todayData);
              break;
          case "2":
              $progressContainer.radialMultiProgress("setOption", "data", thisWeekData);
              break;
          case "3":
              $progressContainer.radialMultiProgress("setOption", "data", thisMonthData);
              break;
          default:
              break;
      }
  });
});
/*     Most Type of Dınner End      */